

const stats = [
  { label: 'Doanh thu hom nay', value: '24,500,000 VND', change: '+12.4%' },
  { label: 'Don hang moi', value: '128', change: '+8.1%' },
  { label: 'Khach hang moi', value: '39', change: '+5.7%' },
  { label: 'San pham sap het', value: '17', change: '-2.3%' },
]

const recentOrders = [
  { id: '#OD10231', customer: 'Nguyen Van A', total: '1,250,000 VND', status: 'Da thanh toan' },
  { id: '#OD10230', customer: 'Tran Thi B', total: '540,000 VND', status: 'Dang giao' },
  { id: '#OD10229', customer: 'Le Minh C', total: '2,140,000 VND', status: 'Cho xu ly' },
  { id: '#OD10228', customer: 'Pham Thu D', total: '720,000 VND', status: 'Da huy' },
]

const topProducts = [
  { name: 'Tai nghe Bluetooth X1', sold: 248, stock: 34 },
  { name: 'Ban phim co K87', sold: 196, stock: 21 },
  { name: 'Chuot gaming M5', sold: 174, stock: 18 },
  { name: 'Laptop Air 14', sold: 92, stock: 7 },
]

function getStatusClass(status) {
  if (status === 'Da thanh toan') return 'bg-emerald-100 text-emerald-700'
  if (status === 'Dang giao') return 'bg-blue-100 text-blue-700'
  if (status === 'Cho xu ly') return 'bg-amber-100 text-amber-700'
  return 'bg-rose-100 text-rose-700'
}

function Dashboard() {

  return (
    <div className="p-4 md:p-6 space-y-6 w-full">
      <section className="rounded-2xl bg-white p-5 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900 md:text-3xl">Dashboard Admin</h1>
            <p className="mt-1 text-sm text-slate-500">Theo doi hoat dong he thong ban hang theo thoi gian thuc.</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
              Xuat bao cao
            </button>
            <button className="rounded-lg bg-amber-400 px-4 py-2 text-sm font-bold text-slate-900 hover:bg-amber-300">
              Tao khuyen mai
            </button>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label} className="rounded-xl bg-white p-4 shadow-sm">
            <p className="text-sm text-slate-500">{item.label}</p>
            <p className="mt-2 text-xl font-extrabold text-slate-900">{item.value}</p>
            <p className="mt-1 text-sm font-semibold text-emerald-600">{item.change}</p>
          </div>
        ))}
      </section>

      <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="rounded-2xl bg-white p-5 shadow-sm xl:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-900">Don hang gan day</h3>
            <a href="/admin/orders" className="text-sm font-semibold text-blue-600 hover:underline">
              Xem tat ca
            </a>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="border-b border-slate-200 text-slate-500">
                <tr>
                  <th className="px-2 py-2">Ma don</th>
                  <th className="px-2 py-2">Khach hang</th>
                  <th className="px-2 py-2">Tong tien</th>
                  <th className="px-2 py-2">Trang thai</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id} className="border-b border-slate-100">
                    <td className="px-2 py-3 font-semibold text-slate-800">{order.id}</td>
                    <td className="px-2 py-3 text-slate-700">{order.customer}</td>
                    <td className="px-2 py-3 text-slate-700">{order.total}</td>
                    <td className="px-2 py-3">
                      <span className={'rounded-full px-2 py-1 text-xs font-bold ' + getStatusClass(order.status)}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900">San pham ban chay</h3>
            <ul className="mt-4 space-y-3">
              {topProducts.map((item) => (
                <li key={item.name} className="rounded-lg bg-slate-50 p-3">
                  <p className="font-semibold text-slate-800">{item.name}</p>
                  <p className="mt-1 text-xs text-slate-500">Da ban: {item.sold} | Ton kho: {item.stock}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-slate-900 p-5 text-slate-100 shadow-sm">
            <h3 className="text-lg font-bold">Thong bao nhanh</h3>
            <p className="mt-2 text-sm text-slate-300">
              Co 3 don hang cho xu ly va 2 san pham can bo sung kho trong ngay hom nay.
            </p>
            <button className="mt-4 rounded-lg bg-amber-400 px-4 py-2 text-sm font-bold text-slate-900 hover:bg-amber-300">
              Xu ly ngay
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Dashboard