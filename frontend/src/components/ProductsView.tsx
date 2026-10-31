import React, { useState, useEffect } from 'react';
import { api } from '../api';
import { Product, ProductVariant, User } from '../types';
import { Box, Plus, Tag, DollarSign, Layers, Sparkles, Check } from 'lucide-react';

interface ProductsViewProps {
  currentUser: User | null;
}

export const ProductsView: React.FC<ProductsViewProps> = ({ currentUser }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

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
    setLoading(true);
    try {
      const data = await api.getProducts();
      setProducts(data);
    } catch (err) {
      console.error('Error loading products:', err);
    } finally {
      setLoading(false);
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
      // Reset
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
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Products & Pricing Variants</h1>
          <p className="text-slate-500 text-sm">
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
            className="bg-purple-700 hover:bg-purple-800 text-white font-bold text-sm px-4 py-2.5 rounded-lg shadow flex items-center space-x-2 transition"
          >
            <Plus className="w-4 h-4" />
            <span>New Product & Variants</span>
          </button>
        )}
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((p) => {
          const margin = p.sales_price > 0 ? (((p.sales_price - p.cost_price) / p.sales_price) * 100).toFixed(0) : 0;
          return (
            <div key={p.id} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                      {p.type}
                    </span>
                    <h3 className="text-lg font-black text-slate-900 mt-2">{p.name}</h3>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-black text-slate-900">${p.sales_price.toFixed(2)}</span>
                    <span className="block text-[11px] text-slate-400">Cost: ${p.cost_price.toFixed(2)} ({margin}% margin)</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 mt-2.5 line-clamp-2">
                  {p.notes || 'No description notes provided.'}
                </p>

                {/* Variants List */}
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-slate-700 flex items-center space-x-1">
                      <Layers className="w-3.5 h-3.5 text-purple-600" />
                      <span>Available Variants:</span>
                    </span>
                    {currentUser?.role === 'admin' && (
                      <button
                        onClick={() => setSelectedProductForVariant(p)}
                        className="text-[11px] text-purple-700 hover:text-purple-900 font-bold flex items-center space-x-0.5"
                      >
                        <Plus className="w-3 h-3" />
                        <span>Add</span>
                      </button>
                    )}
                  </div>

                  {p.variants.length === 0 ? (
                    <span className="text-xs text-slate-400 italic">No variants configured (standard base item)</span>
                  ) : (
                    <div className="flex flex-wrap gap-1.5">
                      {p.variants.map((v) => (
                        <div
                          key={v.id}
                          className="text-xs bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-md flex items-center space-x-1.5"
                        >
                          <span className="font-semibold text-slate-700">{v.attribute_value}</span>
                          <span className="font-mono font-bold text-purple-700 bg-purple-100/60 px-1 rounded text-[11px]">
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
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-xl shadow-2xl max-w-xl w-full p-6 space-y-4 my-8">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <h3 className="text-lg font-black text-slate-900">Add New Product & Variants</h3>
              <button onClick={() => setShowCreateModal(false)} className="text-slate-400 font-bold">✕</button>
            </div>

            <form onSubmit={handleCreateProduct} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Product Name *</label>
                <input
                  type="text"
                  placeholder="e.g. Brightloop Enterprise ERP"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-slate-300 rounded px-3 py-2 text-slate-900 focus:outline-none focus:ring-1 focus:ring-purple-500"
                  required
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Product Type</label>
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="w-full border border-slate-300 rounded px-2.5 py-2 text-slate-900 focus:outline-none focus:ring-1 focus:ring-purple-500"
                  >
                    <option value="software">Software</option>
                    <option value="service">Service</option>
                    <option value="addon">Add-on</option>
                    <option value="consumable">Consumable</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Sales Price ($) *</label>
                  <input
                    type="number"
                    step="0.01"
                    value={salesPrice}
                    onChange={(e) => setSalesPrice(Number(e.target.value))}
                    className="w-full border border-slate-300 rounded px-2.5 py-2 text-slate-900 focus:outline-none focus:ring-1 focus:ring-purple-500"
                    required
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Cost Price ($)</label>
                  <input
                    type="number"
                    step="0.01"
                    value={costPrice}
                    onChange={(e) => setCostPrice(Number(e.target.value))}
                    className="w-full border border-slate-300 rounded px-2.5 py-2 text-slate-900 focus:outline-none focus:ring-1 focus:ring-purple-500"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Internal Notes</label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Notes about product specifications, SLA, or licensing terms"
                  className="w-full border border-slate-300 rounded px-3 py-2 text-slate-900 focus:outline-none focus:ring-1 focus:ring-purple-500"
                />
              </div>

              {/* Variants Section */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="font-bold text-slate-800">Variants (e.g. Brand: Odoo +560)</span>
                  <button
                    type="button"
                    onClick={addVariantDraft}
                    className="text-purple-700 font-bold hover:text-purple-900 flex items-center space-x-1"
                  >
                    <Plus className="w-3 h-3" />
                    <span>Add Variant</span>
                  </button>
                </div>

                <div className="space-y-2 border border-slate-200 rounded-lg p-2 bg-slate-50">
                  {variants.map((v, i) => (
                    <div key={i} className="grid grid-cols-12 gap-2 items-center bg-white p-2 rounded border border-slate-200">
                      <input
                        type="text"
                        placeholder="Attribute (e.g. Brand)"
                        value={v.attribute_name}
                        onChange={(e) => {
                          const nv = [...variants];
                          nv[i].attribute_name = e.target.value;
                          setVariants(nv);
                        }}
                        className="col-span-4 border border-slate-300 rounded px-2 py-1"
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
                        className="col-span-4 border border-slate-300 rounded px-2 py-1"
                      />
                      <div className="col-span-3 flex items-center space-x-1">
                        <span className="text-slate-500 font-bold">+$</span>
                        <input
                          type="number"
                          placeholder="560"
                          value={v.extra_price}
                          onChange={(e) => {
                            const nv = [...variants];
                            nv[i].extra_price = Number(e.target.value);
                            setVariants(nv);
                          }}
                          className="w-full border border-slate-300 rounded px-2 py-1"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() => setVariants(variants.filter((_, idx) => idx !== i))}
                        className="col-span-1 text-rose-500 font-bold text-center"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                  {variants.length === 0 && (
                    <p className="text-slate-400 italic text-center py-2">No variants added.</p>
                  )}
                </div>
              </div>

              <div className="flex justify-end space-x-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="px-3.5 py-2 border border-slate-300 text-slate-700 rounded font-bold hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-purple-700 hover:bg-purple-800 text-white rounded font-bold shadow-sm"
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
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-sm w-full p-6 space-y-4">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-base font-black text-slate-900">Add Variant</h3>
                <p className="text-xs text-slate-500">{selectedProductForVariant.name}</p>
              </div>
              <button onClick={() => setSelectedProductForVariant(null)} className="text-slate-400 font-bold">✕</button>
            </div>

            <form onSubmit={handleAddVariantToProduct} className="space-y-3 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Attribute Name</label>
                <input
                  type="text"
                  value={varAttrName}
                  onChange={(e) => setVarAttrName(e.target.value)}
                  placeholder="e.g. Brand, Tier, Edition"
                  className="w-full border border-slate-300 rounded px-2.5 py-1.5 text-slate-900"
                  required
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Attribute Value</label>
                <input
                  type="text"
                  value={varAttrValue}
                  onChange={(e) => setVarAttrValue(e.target.value)}
                  placeholder="e.g. Odoo, Enterprise"
                  className="w-full border border-slate-300 rounded px-2.5 py-1.5 text-slate-900"
                  required
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Extra Price (+$)</label>
                <input
                  type="number"
                  value={varExtraPrice}
                  onChange={(e) => setVarExtraPrice(Number(e.target.value))}
                  placeholder="e.g. 560"
                  className="w-full border border-slate-300 rounded px-2.5 py-1.5 text-slate-900 font-bold"
                  required
                />
              </div>

              <div className="flex justify-end space-x-2 pt-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setSelectedProductForVariant(null)}
                  className="px-3 py-1.5 border border-slate-300 rounded font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-3.5 py-1.5 bg-purple-700 text-white rounded font-bold shadow-sm"
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
