import { useState } from 'react'

export default function ManageProduct() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop Dell XPS 13', price: 25000000, stock: 15, category: 'Công nghệ', status: 'active' },
    { id: 2, name: 'iPhone 15 Pro', price: 30000000, stock: 8, category: 'Điện thoại', status: 'active' },
    { id: 3, name: 'Tai nghe Sony WH', price: 5000000, stock: 25, category: 'Âm thanh', status: 'active' },
  ])

  const [showModal, setShowModal] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    stock: '',
    category: '',
    status: 'active'
  })

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleAddNew = () => {
    setEditingId(null)
    setFormData({ name: '', price: '', stock: '', category: '', status: 'active' })
    setShowModal(true)
  }

  const handleEdit = (product) => {
    setEditingId(product.id)
    setFormData(product)
    setShowModal(true)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === 'price' || name === 'stock' ? parseInt(value) || '' : value
    }))
  }

  const handleSave = () => {
    if (!formData.name || !formData.price || !formData.stock || !formData.category) {
      alert('Vui lòng điền đầy đủ thông tin')
      return
    }

    if (editingId) {
      setProducts(products.map(p =>
        p.id === editingId ? { ...formData, id: editingId } : p
      ))
    } else {
      setProducts([...products, { ...formData, id: Date.now() }])
    }

    setShowModal(false)
  }

  const handleDelete = (id) => {
    if (window.confirm('Bạn chắc chắn muốn xóa sản phẩm này?')) {
      setProducts(products.filter(p => p.id !== id))
    }
  }

  const handleToggleStatus = (id) => {
    setProducts(products.map(p =>
      p.id === id ? { ...p, status: p.status === 'active' ? 'inactive' : 'active' } : p
    ))
  }

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Quản lý Sản phẩm</h1>
            <p className="text-slate-600 mt-1">Tổng có {products.length} sản phẩm</p>
          </div>
          <button
            onClick={handleAddNew}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors flex items-center gap-2"
          >
            <span>+</span> Thêm sản phẩm
          </button>
        </div>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">ID</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Tên sản phẩm</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Danh mục</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Giá</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Kho</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Trạng thái</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Hành động</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredProducts.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="px-6 py-8 text-center text-gray-500">
                      <div className="text-5xl mb-3">📦</div>
                      Không tìm thấy sản phẩm nào
                    </td>
                  </tr>
                ) : (
                  filteredProducts.map(product => (
                    <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-600">#{product.id}</td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{product.name}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">
                          {product.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                        {product.price.toLocaleString('vi-VN')} ₫
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-green-500 h-2 rounded-full"
                              style={{ width: `${Math.min(product.stock * 5, 100)}%` }}
                            ></div>
                          </div>
                          <span className="ml-3 text-sm font-medium text-gray-900">{product.stock}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => handleToggleStatus(product.id)}
                          className={`px-3 py-1 rounded-full text-xs font-semibold cursor-pointer transition-colors ${
                            product.status === 'active'
                              ? 'bg-green-100 text-green-800 hover:bg-green-200'
                              : 'bg-red-100 text-red-800 hover:bg-red-200'
                          }`}
                        >
                          {product.status === 'active' ? '✓ Hoạt động' : '✗ Tạm dừng'}
                        </button>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEdit(product)}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm font-medium transition-colors"
                          >
                            Sửa
                          </button>
                          <button
                            onClick={() => handleDelete(product.id)}
                            className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm font-medium transition-colors"
                          >
                            Xóa
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full">
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-900">
                {editingId ? 'Chỉnh sửa sản phẩm' : 'Thêm sản phẩm mới'}
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-600 hover:text-gray-900 text-2xl leading-none"
              >
                ✕
              </button>
            </div>

            <div className="px-6 py-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-1">Tên sản phẩm *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Nhập tên sản phẩm"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-1">Danh mục *</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">-- Chọn danh mục --</option>
                  <option value="Công nghệ">Công nghệ</option>
                  <option value="Điện thoại">Điện thoại</option>
                  <option value="Âm thanh">Âm thanh</option>
                  <option value="Thời trang">Thời trang</option>
                  <option value="Nhà & Bếp">Nhà & Bếp</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-1">Giá (₫) *</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  placeholder="Nhập giá"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-1">Số lượng kho *</label>
                <input
                  type="number"
                  name="stock"
                  value={formData.stock}
                  onChange={handleInputChange}
                  placeholder="Nhập số lượng"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-1">Trạng thái</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="active">Hoạt động</option>
                  <option value="inactive">Tạm dừng</option>
                </select>
              </div>
            </div>

            <div className="px-6 py-4 border-t border-gray-200 flex gap-3 justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium text-gray-900"
              >
                Hủy
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
              >
                {editingId ? 'Cập nhật' : 'Thêm mới'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}