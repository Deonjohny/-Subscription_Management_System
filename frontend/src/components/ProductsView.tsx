import React, { useState, useEffect } from 'react';
import { api } from '../api';
import { Product, User } from '../types';
import { Plus, Layers } from 'lucide-react';

interface ProductsViewProps {
  currentUser: User | null;
}

export const ProductsView: React.FC<ProductsViewProps> = ({ currentUser }) => {
  const [products, setProducts] = useState<Product[]>([]);

  // Create Product Modal
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [name, setName] = useState('');
  const [type, setType] = useState('software');
  const [salesPrice, setSalesPrice] = useState<number>(0);
  const [costPrice, setCostPrice] = useState<number>(0);
  const [notes, setNotes] = useState('');
  const [variants, setVariants] = useState<Array<{ attribute_name: string; attribute_value: string; extra_price: number }>>([]);

  // Add Variant to existing product modal
  const [selectedProductForVariant, setSelectedProductForVariant] = useState<Product | null>(null);
  const [varAttrName, setVarAttrName] = useState('Brand');
  const [varAttrValue, setVarAttrValue] = useState('');
  const [varExtraPrice, setVarExtraPrice] = useState<number>(0);

  const loadProducts = async () => {
    try {
      const data = await api.getProducts();
      setProducts(data);
    } catch (err) {
      console.error('Error loading products:', err);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const addVariantDraft = () => {
    setVariants([...variants, { attribute_name: 'Brand', attribute_value: '', extra_price: 0 }]);
  };

  const handleCreateProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      alert('Please enter a product name');
      return;
    }

    try {
      await api.createProduct({
        name,
        type,
        sales_price: Number(salesPrice),
        cost_price: Number(costPrice),
        notes,
        variants
      });
      setShowCreateModal(false);
      setName('');
      setSalesPrice(0);
      setCostPrice(0);
      setNotes('');
      setVariants([]);
      await loadProducts();
    } catch (err: any) {
      alert(err.response?.data?.detail || 'Failed to create product');
    }
  };

  const handleAddVariantToProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProductForVariant || !varAttrValue.trim()) return;

    try {
      await api.addProductVariant(selectedProductForVariant.id, {
        attribute_name: varAttrName,
        attribute_value: varAttrValue.trim(),
        extra_price: Number(varExtraPrice)
      });
      setSelectedProductForVariant(null);
      setVarAttrValue('');
      setVarExtraPrice(0);
      await loadProducts();
    } catch (err: any) {
      alert(err.response?.data?.detail || 'Failed to add variant');
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-serif font-black text-burgundy-950 tracking-tight">
            Products & Pricing Variants
          </h1>
          <p className="text-cream-700 text-sm">
            Configure software packages, service add-ons, cost baselines, and attribute variants (e.g. Odoo brand +$560).
          </p>
        </div>
        {currentUser?.role === 'admin' && (
          <button
            onClick={() => {
              setVariants([
                { attribute_name: 'Brand', attribute_value: 'Odoo Edition', extra_price: 560 }
              ]);
              setShowCreateModal(true);
            }}
            className="bg-gradient-to-r from-burgundy-900 via-burgundy-800 to-burgundy-900 hover:from-burgundy-800 hover:to-burgundy-700 text-gold-300 border border-gold-400/60 font-serif font-bold text-sm px-4 py-2.5 rounded-xl shadow-gold-subtle flex items-center space-x-2 transition duration-200"
          >
            <Plus className="w-4 h-4 text-gold-400" />
            <span>New Product & Variants</span>
          </button>
        )}
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((p) => {
          const margin = p.sales_price > 0 ? (((p.sales_price - p.cost_price) / p.sales_price) * 100).toFixed(0) : 0;
          return (
            <div key={p.id} className="cream-card rounded-2xl p-5 shadow-sm hover:shadow-cinematic transition duration-300 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-serif font-bold uppercase tracking-wider text-burgundy-900 bg-gold-200/60 px-2.5 py-0.5 rounded border border-gold-400/50">
                      {p.type}
                    </span>
                    <h3 className="text-lg font-serif font-black text-burgundy-950 mt-2">{p.name}</h3>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-serif font-black text-burgundy-950">${p.sales_price.toFixed(2)}</span>
                    <span className="block text-[11px] text-cream-600">Cost: ${p.cost_price.toFixed(2)} ({margin}% margin)</span>
                  </div>
                </div>

                <p className="text-xs text-cream-700 mt-2.5 line-clamp-2">
                  {p.notes || 'No description notes provided.'}
                </p>

                {/* Variants List */}
                <div className="mt-4 pt-3 border-t border-gold-500/20">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-serif font-bold text-burgundy-950 flex items-center space-x-1.5">
                      <Layers className="w-3.5 h-3.5 text-gold-600" />
                      <span>Available Brand / Tier Variants:</span>
                    </span>
                    {currentUser?.role === 'admin' && (
                      <button
                        onClick={() => setSelectedProductForVariant(p)}
                        className="text-[11px] text-burgundy-900 hover:text-burgundy-950 font-serif font-bold flex items-center space-x-0.5"
                      >
                        <Plus className="w-3 h-3 text-gold-600" />
                        <span>Add</span>
                      </button>
                    )}
                  </div>

                  {p.variants.length === 0 ? (
                    <span className="text-xs text-cream-500 italic">Standard base item (No surcharge variants)</span>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {p.variants.map((v) => (
                        <div
                          key={v.id}
                          className="text-xs bg-cream-50 border border-gold-500/30 px-3 py-1 rounded-lg flex items-center space-x-1.5 shadow-sm"
                        >
                          <span className="font-serif font-bold text-burgundy-950">{v.attribute_value}</span>
                          <span className="font-mono font-bold text-gold-700 bg-gold-100/80 px-1.5 py-0.5 rounded text-[11px] border border-gold-400/40">
                            +${v.extra_price}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Create Product Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-burgundy-950/75 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="cream-card rounded-2xl shadow-cinematic-lg max-w-xl w-full p-6 space-y-4 my-8 border border-gold-400">
            <div className="flex justify-between items-center border-b border-gold-500/20 pb-3">
              <h3 className="text-xl font-serif font-black text-burgundy-950">Add New Product & Variants</h3>
              <button onClick={() => setShowCreateModal(false)} className="text-burgundy-800 font-bold text-lg">✕</button>
            </div>

            <form onSubmit={handleCreateProduct} className="space-y-4 text-xs">
              <div>
                <label className="block font-serif font-bold text-burgundy-950 mb-1">Product Title *</label>
                <input
                  type="text"
                  placeholder="e.g. Brightloop Enterprise ERP"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gold-500/30 rounded-lg px-3 py-2 text-burgundy-950 focus:outline-none focus:ring-1 focus:ring-gold-500 bg-white"
                  required
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block font-serif font-bold text-burgundy-950 mb-1">Type</label>
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="w-full border border-gold-500/30 rounded-lg px-2.5 py-2 text-burgundy-950 focus:outline-none focus:ring-1 focus:ring-gold-500 bg-white"
                  >
                    <option value="software">Software</option>
                    <option value="service">Service</option>
                    <option value="addon">Add-on</option>
                    <option value="consumable">Consumable</option>
                  </select>
                </div>
                <div>
                  <label className="block font-serif font-bold text-burgundy-950 mb-1">Sales Price ($) *</label>
                  <input
                    type="number"
                    step="0.01"
                    value={salesPrice}
                    onChange={(e) => setSalesPrice(Number(e.target.value))}
                    className="w-full border border-gold-500/30 rounded-lg px-2.5 py-2 text-burgundy-950 font-serif font-bold focus:outline-none focus:ring-1 focus:ring-gold-500 bg-white"
                    required
                  />
                </div>
                <div>
                  <label className="block font-serif font-bold text-burgundy-950 mb-1">Cost Price ($)</label>
                  <input
                    type="number"
                    step="0.01"
                    value={costPrice}
                    onChange={(e) => setCostPrice(Number(e.target.value))}
                    className="w-full border border-gold-500/30 rounded-lg px-2.5 py-2 text-burgundy-950 focus:outline-none focus:ring-1 focus:ring-gold-500 bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block font-serif font-bold text-burgundy-950 mb-1">Product Notes</label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Notes about product specifications, SLA, or licensing terms"
                  className="w-full border border-gold-500/30 rounded-lg px-3 py-2 text-burgundy-950 focus:outline-none focus:ring-1 focus:ring-gold-500 bg-white"
                />
              </div>

              {/* Variants Section */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="font-serif font-bold text-burgundy-950">Attribute Variants (e.g. Brand: Odoo adds 560)</span>
                  <button
                    type="button"
                    onClick={addVariantDraft}
                    className="text-burgundy-900 font-serif font-bold hover:text-burgundy-950 flex items-center space-x-1"
                  >
                    <Plus className="w-3 h-3 text-gold-600" />
                    <span>Add Variant</span>
                  </button>
                </div>

                <div className="space-y-2 border border-gold-500/20 rounded-xl p-2.5 bg-cream-50">
                  {variants.map((v, i) => (
                    <div key={i} className="grid grid-cols-12 gap-2 items-center bg-white p-2 rounded-lg border border-gold-500/20 shadow-sm">
                      <input
                        type="text"
                        placeholder="Attribute (e.g. Brand)"
                        value={v.attribute_name}
                        onChange={(e) => {
                          const nv = [...variants];
                          nv[i].attribute_name = e.target.value;
                          setVariants(nv);
                        }}
                        className="col-span-4 border border-cream-300 rounded px-2 py-1"
                      />
                      <input
                        type="text"
                        placeholder="Value (e.g. Odoo Edition)"
                        value={v.attribute_value}
                        onChange={(e) => {
                          const nv = [...variants];
                          nv[i].attribute_value = e.target.value;
                          setVariants(nv);
                        }}
                        className="col-span-4 border border-cream-300 rounded px-2 py-1"
                      />
                      <div className="col-span-3 flex items-center space-x-1">
                        <span className="text-gold-700 font-bold">+$</span>
                        <input
                          type="number"
                          placeholder="560"
                          value={v.extra_price}
                          onChange={(e) => {
                            const nv = [...variants];
                            nv[i].extra_price = Number(e.target.value);
                            setVariants(nv);
                          }}
                          className="w-full border border-cream-300 rounded px-2 py-1 font-bold"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() => setVariants(variants.filter((_, idx) => idx !== i))}
                        className="col-span-1 text-rose-600 font-bold text-center"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                  {variants.length === 0 && (
                    <p className="text-cream-600 italic text-center py-2">No custom attribute variants added.</p>
                  )}
                </div>
              </div>

              <div className="flex justify-end space-x-2 pt-3 border-t border-gold-500/20">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="px-4 py-2 border border-gold-500/30 text-burgundy-900 rounded-xl font-serif font-bold hover:bg-cream-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-gradient-to-r from-burgundy-900 to-burgundy-800 hover:from-burgundy-800 text-gold-300 border border-gold-400/50 rounded-xl font-serif font-bold shadow-gold-subtle"
                >
                  Save Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add Variant to Existing Product Modal */}
      {selectedProductForVariant && (
        <div className="fixed inset-0 bg-burgundy-950/75 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="cream-card rounded-2xl shadow-cinematic-lg max-w-sm w-full p-6 space-y-4 border border-gold-400">
            <div className="flex justify-between items-center border-b border-gold-500/20 pb-3">
              <div>
                <h3 className="text-base font-serif font-black text-burgundy-950">Add Surcharge Variant</h3>
                <p className="text-xs text-cream-700">{selectedProductForVariant.name}</p>
              </div>
              <button onClick={() => setSelectedProductForVariant(null)} className="text-burgundy-800 font-bold">✕</button>
            </div>

            <form onSubmit={handleAddVariantToProduct} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-serif font-bold text-burgundy-950 mb-1">Attribute Name</label>
                <input
                  type="text"
                  value={varAttrName}
                  onChange={(e) => setVarAttrName(e.target.value)}
                  placeholder="e.g. Brand, Tier, Edition"
                  className="w-full border border-gold-500/30 rounded-lg px-2.5 py-1.5 text-burgundy-950 bg-white"
                  required
                />
              </div>

              <div>
                <label className="block font-serif font-bold text-burgundy-950 mb-1">Attribute Value</label>
                <input
                  type="text"
                  value={varAttrValue}
                  onChange={(e) => setVarAttrValue(e.target.value)}
                  placeholder="e.g. Odoo, Enterprise"
                  className="w-full border border-gold-500/30 rounded-lg px-2.5 py-1.5 text-burgundy-950 bg-white"
                  required
                />
              </div>

              <div>
                <label className="block font-serif font-bold text-burgundy-950 mb-1">Extra Surcharge (+$)</label>
                <input
                  type="number"
                  value={varExtraPrice}
                  onChange={(e) => setVarExtraPrice(Number(e.target.value))}
                  placeholder="e.g. 560"
                  className="w-full border border-gold-500/30 rounded-lg px-2.5 py-1.5 text-burgundy-950 font-serif font-bold bg-white"
                  required
                />
              </div>

              <div className="flex justify-end space-x-2 pt-2 border-t border-gold-500/20">
                <button
                  type="button"
                  onClick={() => setSelectedProductForVariant(null)}
                  className="px-3.5 py-1.5 border border-gold-500/30 rounded-lg font-serif font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 bg-gradient-to-r from-burgundy-900 to-burgundy-800 text-gold-300 border border-gold-400 rounded-lg font-serif font-bold shadow-sm"
                >
                  Save Variant
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
