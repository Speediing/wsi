import { Search, User, Package, Heart, ShoppingCart, ChevronRight, Instagram, Facebook, Youtube } from 'lucide-react'
import { showSummerSale } from './flags';

export default async function Component() {
  const sale = await showSummerSale();
  console.log(sale)
  return (
    <div className="min-h-screen bg-white">
      {/* Top banner */}
      <div className="bg-gray-600 text-white text-center py-2 text-xs sm:text-sm px-4">
        <p className="line-clamp-2 sm:line-clamp-1">
          Zero interest promo financing* on purchases of $750 or more. <a href="/" className="underline">Learn More {sale}</a>
        </p>
      </div>

{/* Desktop Navigation */}
<nav className="hidden lg:block border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="w-1/4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full border border-gray-300 rounded-sm py-2 pl-3 pr-10 text-sm"
                />
                <button className="absolute right-0 top-0 h-full px-3 flex items-center bg-gray-100 rounded-r-sm border-l border-gray-300">
                  <Search className="text-gray-500" size={18} />
                </button>
              </div>
            </div>
            <h1 className="text-4xl font-serif tracking-wider text-center flex-1">REJUVENATION</h1>
            <div className="w-1/4 flex justify-end space-x-6">
              <a href="/" className="flex flex-col items-center text-xs">
                <User size={20} className="mb-1" />
                <span>Account</span>
              </a>
              <a href="/" className="flex flex-col items-center text-xs">
                <Package size={20} className="mb-1" />
                <span>Track Order</span>
              </a>
              <a href="/" className="flex flex-col items-center text-xs">
                <Heart size={20} className="mb-1" />
                <span>Favorites</span>
              </a>
              <a href="/" className="flex flex-col items-center text-xs">
                <ShoppingCart size={20} className="mb-1" />
                <span>Cart (0)</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Header (unchanged) */}
      <header className="lg:hidden flex justify-between items-center px-4 py-3 border-b">
        <button className="text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <h1 className="text-2xl font-serif tracking-wider">REJUVENATION</h1>
        <div className="flex space-x-4">
          <button className="text-gray-700">
            <Search size={24} />
          </button>
          <button className="text-gray-700">
            <Heart size={24} />
          </button>
          <button className="text-gray-700">
            <ShoppingCart size={24} />
          </button>
        </div>
      </header>

      {/* Navigation */}
      <nav className="border-t border-b overflow-x-auto">
        <ul className="flex justify-start sm:justify-center space-x-6 py-4 text-sm px-4 sm:px-0 whitespace-nowrap">
          <li><a href="/" className="hover:underline">New & Featured</a></li>
          <li><a href="/" className="hover:underline">Shop Rooms</a></li>
          <li><a href="/" className="hover:underline">Project Guides</a></li>
          <li><a href="/" className="hover:underline">Free Design Services</a></li>
          <li><a href="/" className="hover:underline">Contract Grade</a></li>
        </ul>
      </nav>

      {/* Category Navigation */}
      <div className="bg-gray-100 overflow-x-auto">
        <ul className="flex justify-start sm:justify-center space-x-6 py-4 text-sm px-4 sm:px-0 whitespace-nowrap">
          <li><a href="/" className="hover:underline">Lighting & Fans</a></li>
          <li><a href="/" className="hover:underline">Hardware</a></li>
          <li><a href="/" className="hover:underline">Furniture</a></li>
          <li><a href="/" className="hover:underline">Outdoor</a></li>
          <li><a href="/" className="hover:underline">Mirrors</a></li>
          <li><a href="/" className="hover:underline">Rugs</a></li>
          <li><a href="/" className="hover:underline">Bedding & Decor</a></li>
          <li><a href="/" className="hover:underline">Kitchen</a></li>
          <li><a href="/" className="hover:underline">Bath</a></li>
          <li><a href="/" className="hover:underline">Organization</a></li>
          <li><a href="/" className="hover:underline">Vintage</a></li>
          <li><a href="/" className="text-red-500 hover:underline">Sale</a></li>
        </ul>
      </div>

      {/* Promotional Banners */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 text-center">
        <div className="bg-gray-700 text-white py-4 px-2">
          <h3 className="font-bold text-sm sm:text-base">Fall Savings Up to 40% Off</h3>
          <p className="text-xs sm:text-sm">Shop Lighting, Furniture & More <ChevronRight className="inline" size={16} /></p>
        </div>
        <div className="bg-gray-700 text-white py-4 px-2">
          <h3 className="font-bold text-sm sm:text-base">New Arrivals Are Here</h3>
          <p className="text-xs sm:text-sm">Shop Now <ChevronRight className="inline" size={16} /></p>
        </div>
        <div className="bg-gray-700 text-white py-4 px-2">
          <h3 className="font-bold text-sm sm:text-base">Free Shipping on 100s of Items</h3>
          <p className="text-xs sm:text-sm">Shop Now <ChevronRight className="inline" size={16} /></p>
        </div>
        <div className="bg-gray-700 text-white py-4 px-2">
          <h3 className="font-bold text-sm sm:text-base">In-Stock and Quick Ship Furniture</h3>
          <p className="text-xs sm:text-sm">Delivered in 1-5 Weeks <ChevronRight className="inline" size={16} /></p>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full relative overflow-hidden mt-[-85px]" style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)', width: '100vw' }}>
        <iframe 
          src="https://player.vimeo.com/video/1008632929?h=6c7d65625d&background=1" 
          title="Living room with sectional sofa"
          className="w-full h-[56.25vw]"
          style={{ maxHeight: '100vh' }}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* New & Featured Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-serif mb-2 text-gray-800">New & Featured</h2>
        <p className="text-lg mb-6 text-gray-600">
          Shop our latest designs—thoughtfully made to complete every room in your home.
        </p>
        <hr className="mb-8 border-gray-300" />
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div>
              <img 
                src="https://assets.rjimgs.com/rjimgs/rk/images/dp/ecm/202437/2351/001/004.jpg" 
                alt="Chandelier" 
                className="w-full h-72 object-cover mb-4"
              />
              <a href="/" className="text-sm font-semibold flex items-center text-gray-800 hover:underline">
                CHANDELIERS <ChevronRight size={16} className="ml-1" />
              </a>
              <p className="text-sm text-gray-600 italic">New Fairvale Chandelier</p>
            </div>
            <div>
              <img 
                src="https://assets.rjimgs.com/rjimgs/rk/images/dp/ecm/202437/1435/001/004.jpg" 
                alt="Bath Vanity" 
                className="w-full h-72 object-cover mb-4"
              />
              <a href="/" className="text-sm font-semibold flex items-center text-gray-800 hover:underline">
                BATH VANITIES <ChevronRight size={16} className="ml-1" />
              </a>
              <p className="text-sm text-gray-600 italic">New Theodora Vanity</p>
            </div>
            <div>
              <img 
                src="https://assets.rjimgs.com/rjimgs/rk/images/dp/ecm/202437/2351/001/006.jpg" 
                alt="Armchair" 
                className="w-full h-72 object-cover mb-4"
              />
              <a href="/" className="text-sm font-semibold flex items-center text-gray-800 hover:underline">
                IN-STOCK FURNITURE <ChevronRight size={16} className="ml-1" />
              </a>
              <p className="text-sm text-gray-600 italic">Delivers Within 5 Weeks</p>
            </div>
            <div>
              <img 
                src="https://assets.rjimgs.com/rjimgs/rk/images/dp/ecm/202437/1435/001/010.jpg" 
                alt="Rug" 
                className="w-full h-72 object-cover mb-4"
              />
              <a href="/" className="text-sm font-semibold flex items-center text-gray-800 hover:underline">
                RUGS <ChevronRight size={16} className="ml-1" />
              </a>
              <p className="text-sm text-gray-600 italic">New Arrivals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">CUSTOMER SERVICE</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="hover:underline">Contact Us</a></li>
                <li><a href="/" className="hover:underline">Track Your Order</a></li>
                <li><a href="/" className="hover:underline">Returns & Exchanges</a></li>
                <li><a href="/" className="hover:underline">Shipping Information</a></li>
                <li><a href="/" className="hover:underline">Sign Up for Email and Text Updates</a></li>
                <li><a href="/" className="hover:underline">Site Map</a></li>
                <li><a href="/" className="hover:underline">Do Not Sell or Share My Personal Information</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">BUSINESS TO BUSINESS</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="hover:underline">Overview</a></li>
                <li><a href="/" className="hover:underline">Trade</a></li>
                <li><a href="/" className="hover:underline">Contract</a></li>
              </ul>
              <h3 className="font-bold mt-6 mb-4">DESIGN CREW</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="hover:underline">Free Design Appointments</a></li>
                <li><a href="/" className="hover:underline">Book an Appointment</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">RESOURCES</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="hover:underline">Gift Cards</a></li>
                <li>
                  <a href="/" className="hover:underline">View Online Catalog</a>
                </li>
                <li><a href="/" className="hover:underline">Our Blog</a></li>
              </ul>
              <h3 className="font-bold mt-6 mb-4">THE KEY REWARDS + CARD</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="hover:underline">Credit Card</a></li>
                <li><a href="/" className="hover:underline">Manage My Credit Card</a></li>
                <li><a href="/" className="hover:underline">The Key Rewards</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">SIGN UP FOR EMAILS</h3>
              <p className="text-sm mb-4">Sign up to hear about our latest sales, new arrivals & more.</p>
              <form className="flex mb-4">
                <input type="email" placeholder="Enter your email" className="flex-grow border p-2 text-sm" />
                <button type="submit" className="bg-black text-white p-2 text-sm">
                  <ChevronRight size={16} />
                </button>
              </form>
              <p className="text-xs mb-4">
                California residents: can request <a href="/" className="underline">Do Not Sell or Share My Personal Information</a>
              </p>
              <p className="text-xs mb-4">
                Please visit our <a href="/" className="underline">privacy policy</a> to learn how we can use your information.
              </p>
              <h3 className="font-bold mb-4">ABOUT US</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="hover:underline">Our Factory</a></li>
                <li><a href="/" className="hover:underline">Our Commitments</a></li>
                <li><a href="/" className="hover:underline">Careers</a></li>
                <li><a href="/" className="hover:underline">Find A Store</a></li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center space-x-4 mt-8">
            <a href="/" className="text-gray-600 hover:text-black"><Instagram size={24} /></a>
            <a href="/" className="text-gray-600 hover:text-black"><Facebook size={24} /></a>
            <a href="/" className="text-gray-600 hover:text-black"><Youtube size={24} /></a>
          </div>
          <div className="text-center text-xs mt-8">
            <p>© 2024 Williams-Sonoma, Inc. All Rights Reserved</p>
            <p className="mt-2">
              <a href="/" className="underline">Terms & Conditions</a> | <a href="/" className="underline">Accessibility</a> | <a href="/" className="underline">Privacy Policy</a> | <a href="/" className="underline">Legal Statement</a>
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Design Question Box */}
      <div className="fixed bottom-4 right-4 bg-white border rounded-lg shadow-lg p-4 flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
        <div>
          <p className="font-bold">Design Question?</p>
          <p className="text-xs">START A FREE DESIGN CHAT ›</p>
        </div>
      </div>
    </div>
  )
}