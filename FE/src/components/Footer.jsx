function Footer() {
  return (
    <footer className="mt-10 bg-slate-900 text-slate-200">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-4 py-10 md:grid-cols-2 md:px-6 lg:grid-cols-4">
        <div>
          <h3 className="text-xl font-extrabold text-white">
            Shop<span className="text-amber-400">Now</span>
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Nền tảng mua sắm trực tuyến với sản phẩm chất lượng, giá tốt và giao hàng nhanh toàn quốc.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wide text-white">
            Danh mục
          </h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#" className="hover:text-amber-300">Điện thoại</a></li>
            <li><a href="#" className="hover:text-amber-300">Laptop</a></li>
            <li><a href="#" className="hover:text-amber-300">Phụ kiện</a></li>
            <li><a href="#" className="hover:text-amber-300">Thiết bị gia dụng</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wide text-white">
            Hỗ trợ
          </h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#" className="hover:text-amber-300">Chính sách đổi trả</a></li>
            <li><a href="#" className="hover:text-amber-300">Hướng dẫn mua hàng</a></li>
            <li><a href="#" className="hover:text-amber-300">Phương thức thanh toán</a></li>
            <li><a href="#" className="hover:text-amber-300">Câu hỏi thường gặp</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wide text-white">
            Liên hệ
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li>Hotline: 1900 1234</li>
            <li>Email: support@shopnow.vn</li>
            <li>Địa chỉ: 123 Nguyễn Trãi, Hà Nội</li>
          </ul>

          <div className="mt-4 flex items-center gap-2">
            <input
              type="email"
              placeholder="Nhập email nhận ưu đãi"
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white placeholder:text-slate-400 outline-none focus:border-amber-400"
            />
            <button className="rounded-lg bg-amber-400 px-4 py-2 text-sm font-bold text-slate-900 hover:bg-amber-300">
              Gửi
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-slate-400 md:flex-row md:px-6">
          <p>© 2026 ShopNow. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-amber-300">Điều khoản</a>
            <a href="#" className="hover:text-amber-300">Bảo mật</a>
            <a href="#" className="hover:text-amber-300">Sơ đồ trang</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer