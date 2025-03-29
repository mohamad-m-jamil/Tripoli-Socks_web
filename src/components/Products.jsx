import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Products = ({ addToBasket }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const products = [
    { id: 1, image: '/images/id1.jpg', caption: 'i don.t give a fuck (white)', price: '2$ 200.000 L.L.' },
    { id: 2, image: '/images/id2.jpg', caption: 'kiss or punch (white)', price: '2$ 200.000 L.L.' },
    { id: 3, image: '/images/id3.jpg', caption: 'bad bitch (white)', price: '2$ 200.000 L.L.' },
    { id: 4, image: '/images/id4.jpg', caption: 'First class bitch (withe)', price: '2$ 200.000 L.L.' },
    { id: 5, image: '/images/id5.jpg', caption: 'Escobart (white)', price: '2$ 200.000 L.L.' },
    { id: 6, image: '/images/id6.jpg', caption: 'shut up (withe)', price: '2$ 200.000 L.L.' },
    { id: 8, image: '/images/id8.jpg', caption: 'First class bitch (black)', price: '2$ 200.000 L.L.' },
    { id: 9, image: '/images/id9.jpg', caption: 'what the fuck (black)', price: '2$ 200.000 L.L.' },
    { id: 10, image: '/images/id10.jpg', caption: 'hell is real (black)', price: '2$ 200.000 L.L.' },
    { id: 11, image: '/images/id11.jpg', caption: 'boys dont cry (black)', price: '2$ 200.000 L.L.' },
    { id: 12, image: '/images/id12.jpg', caption: 'no fun (black)', price: '2$ 200.000 L.L.' },
    { id: 13, image: '/images/id13.jpg', caption: 'nike (black long)', price: '2$ 200.000 L.L.' },
    { id: 14, image: '/images/id14.jpg', caption: 'nike (black short)', price: '2$ 200.000 L.L.' },
    { id: 15, image: '/images/id15.jpg', caption: 'nike (white and grey long)', price: '2$ 200.000 L.L.' },
    { id: 16, image: '/images/id16.jpg', caption: 'nike (white and orange long)', price: '2$ 200.000 L.L.' },
    { id: 17, image: '/images/id17.jpg', caption: 'nike (white and green long)', price: '2$ 200.000 L.L.' },
    { id: 18, image: '/images/id18.jpg', caption: 'nike (white and purple long)', price: '2$ 200.000 L.L.' },
    { id: 19, image: '/images/id19.jpg', caption: 'clover 🍀 (black)', price: '2$ 200.000 L.L.' },
    { id: 21, image: '/images/id20.jpg', caption: 'stope talking (withe)', price: '2$ 200.000 L.L.' },
    { id: 22, image: '/images/id21.jpg', caption: 'lakers 🏀', price: '2$ 200.000 L.L.' },
    { id: 23, image: '/images/id22.jpg', caption: 'smells good (black)', price: '2$ 200.000 L.L.'},
    { id: 24, image: '/images/id23.jpg', caption: 'nike (black) with stripes (white long)', price: '2$ 200.000 L.L.'},
    { id: 25, image: '/images/id24.jpg', caption: 'nike (white long)', price: '2$ 200.000 L.L.'},
    { id: 26, image: '/images/id25.jpg', caption: 'nike (white short)', price: '2$ 200.000 L.L.'},
    { id: 27, image: '/images/id26.jpg', caption: 'Dollars💲💲💲 (white long)', price: '2$ 200.000 L.L.'},
    { id: 28, image: '/images/id27.jpg', caption: 'i need money (white)', price: '2$ 200.000 L.L.'},
    { id: 29, image: '/images/id28.jpg', caption: 'the north face (withe)', price: '2$ 200.000 L.L.'},
  ];

  const chunkSize = 7;
  const productRows = [];
  for (let i = 0; i < products.length; i += chunkSize) {
    productRows.push(products.slice(i, i + chunkSize));
  }

  const whatsappNumber = '81365212';
  const whatsappMessage = (product) => 
    `Hi! I'm interested in buying *\u001b${product.caption}\u001b* for *${product.price}*`;
  
  const openModal = (image) => {
    setSelectedImage(image);
    window.scrollTo({ top: 245, behavior: 'smooth' });
  };

  return (
    <div className="products-container">
      {productRows.map((row, rowIndex) => (
        <div key={rowIndex} className="products-row">
          {row.map((product) => (
            <div key={product.id} className="product-card">
              <img 
                src={process.env.PUBLIC_URL + product.image} 
                alt={product.caption} 
                className="product-image"
                onClick={() => openModal(product.image)}
              />
              <div className="product-info">
                <p className="product-caption">{product.caption}</p>
                <p className="product-price">{product.price}</p>
                <div className="buttomcard">
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage(product))}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-button"
                  >
                    <FaWhatsapp /> WhatsApp
                  </a>
                  {/* Add to Basket Button */}
                  <button 
                    className="basket-button"
                    onClick={() => addToBasket(product)}
                  >
                    Add to Basket
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
      
      {/* Modal for full-screen image */}
      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content">
            <img 
              src={process.env.PUBLIC_URL + selectedImage} 
              alt="Full View" 
              className="modal-image" 
            />
            <button 
              className="close-button" 
              onClick={() => setSelectedImage(null)}
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
