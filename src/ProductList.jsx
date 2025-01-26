import React, { useState, useEffect } from 'react';
import './ProductList.css'
import CartItem from './CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';

function ProductList() {
    const [showCart, setShowCart] = useState(false);
    const [showPlants, setShowPlants] = useState(false); // State to control the visibility of the About Us page
    const [addedToCart, setAddedToCart] = useState({}); // To track which products are added to cart
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const plantsArray = [
        {
            category: "Air Purifying Plants",
            plants: [
                {
                    name: "Bamboo Palm",
                    image: "https://cdn.pixabay.com/photo/2020/01/30/04/27/palm-4804295_1280.jpg",
                    description: "Removes carbon monoxide and formaldehyde,Thrives in indirect light.",
                    cost: "$18"
                },
                {
                    name: " Dracaena Marginata",
                    image: "https://cdn.pixabay.com/photo/2017/08/13/15/37/green-plants-2637613_1280.jpg",
                    description: "Eliminates benzene, xylene, and formaldehyde.",
                    cost: "$17"
                },
                {
                    name: " Golden Pothos",
                    image: "https://cdn.pixabay.com/photo/2018/11/15/10/32/plants-3816945_1280.jpg",
                    description: "Removes formaldehyde and other toxins.",
                    cost: "$22"
                },
                {
                    name: "Kimberly Queen Fern",
                    image: "https://cdn.pixabay.com/photo/2015/04/10/00/40/green-715535_1280.jpg",
                    description: "Excellent at increasing humidity and purifying air.",
                    cost: "$24"
                },
                {
                    name: " Gerbera Daisy",
                    image: "https://cdn.pixabay.com/photo/2023/06/22/17/05/flowers-8081925_1280.jpg",
                    description: "Bright blooms add color to interiors.",
                    cost: "$20"
                },
                {
                    name: "Fiddle Leaf Fig ",
                    image: "https://cdn.pixabay.com/photo/2019/08/26/15/22/fig-tree-4432033_1280.jpg",
                    description: "Filters air while being a stylish decor piece.",
                    cost: "$17"
                }
            ]
        },
        {
            category: "Aromatic Fragrant Plants",
            plants: [
                {
                    name: "Gardenia",
                    image: "https://cdn.pixabay.com/photo/2020/04/27/02/41/gardenia-5097886_1280.jpg",
                    description: "Thrives in warm, humid climates.npm run preview",
                    cost: "$24"
                },
                {
                    name: "Sweet Alyssum ",
                    image: "https://cdn.pixabay.com/photo/2021/05/09/17/26/sweet-alyssum-6241568_1280.jpg",
                    description: "Offers a honey-like scent.",
                    cost: "$19"
                },
                {
                    name: "Thyme",
                    image: "https://cdn.pixabay.com/photo/2023/06/15/08/05/bee-8064761_1280.jpg",
                    description: "Woody, herbal scent.",
                    cost: "$19"
                },
                {
                    name: "Eucalyptus",
                    image: "https://cdn.pixabay.com/photo/2017/02/21/17/40/eucalyptus-2086785_1280.jpg",
                    description: "Known for its fresh, menthol-like aroma.",
                    cost: "$14"
                },
                {
                    name: "Chamomile",
                    image: "https://cdn.pixabay.com/photo/2016/03/16/21/25/chamomile-1261796_1280.jpg",
                    description: "Soft, apple-like fragrance.",
                    cost: "$17"
                },
                {
                    name: "Sweet Pea",
                    image: "https://cdn.pixabay.com/photo/2019/07/12/06/51/sweet-pea-4332069_1280.jpg",
                    description: "Sweet Pea is a Delicate floral fragrance.",
                    cost: "$25"
                }
            ]
        },
        {
            category: "Insect Repellent Plants",
            plants: [
                {
                    name: "Citronella Grass",
                    image: "https://cdn.pixabay.com/photo/2017/05/14/14/24/grass-2312139_1280.jpg",
                    description: "One of the most effective mosquito repellents.",
                    cost: "$13"
                },
                {
                    name: "Chrysanthemums  ",
                    image: "https://cdn.pixabay.com/photo/2019/10/23/16/30/chrysanthemum-4572108_1280.jpg",
                    description: "Contains pyrethrins, which repel roaches, ants, and ticks.",
                    cost: "$9"
                },
                {
                    name: "Thyme ",
                    image: "https://cdn.pixabay.com/photo/2017/04/04/18/00/vegetables-2202504_960_720.jpg",
                    description: "Effective against mosquitoes,Hardy and easy to grow",
                    cost: "$23"
                },
                {
                    name: "Catnip ",
                    image: "https://cdn.pixabay.com/photo/2022/05/31/08/09/flowers-7232964_1280.jpg",
                    description: "Contains nepetalactone, a strong mosquito repellent.",
                    cost: "$10"
                },
                {
                    name: "Bay Laurel ",
                    image: "https://cdn.pixabay.com/photo/2014/07/05/03/10/laurel-fruits-384515_1280.jpg",
                    description: "Aromatic leaves are often used in cooking.",
                    cost: "$23"
                },
                {
                    name: "Pitcher Plant ",
                    image: "https://cdn.pixabay.com/photo/2019/03/19/09/50/pitcher-plant-4065247_1280.jpg",
                    description: "Carnivorous plant that traps and eats insects.",
                    cost: "$15"
                }
            ]
        },
        {
            category: "Medicinal Plants",
            plants: [
                {
                    name: "Aloe Vera",
                    image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
                    description: "Soothing gel used for skin ailments.",
                    cost: "$14"
                },
                {
                    name: "Echinacea",
                    image: "https://cdn.pixabay.com/photo/2014/12/05/03/53/echinacea-557477_1280.jpg",
                    description: "Boosts immune system, helps fight colds.",
                    cost: "$16"
                },
                {
                    name: "Peppermint",
                    image: "https://cdn.pixabay.com/photo/2017/07/12/12/23/peppermint-2496773_1280.jpg",
                    description: "Relieves digestive issues and headaches.",
                    cost: "$13"
                },
                {
                    name: "Lemon Balm",
                    image: "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg",
                    description: "Calms nerves and promotes relaxation.",
                    cost: "$14"
                },
                {
                    name: "Chamomile",
                    image: "https://cdn.pixabay.com/photo/2016/08/19/19/48/flowers-1606041_1280.jpg",
                    description: "Soothes anxiety and promotes sleep.",
                    cost: "$15"
                },
                {
                    name: "Calendula",
                    image: "https://cdn.pixabay.com/photo/2019/07/15/18/28/flowers-4340127_1280.jpg",
                    description: "Heals wounds and soothes skin irritations.",
                    cost: "$12"
                }
            ]
        },
        {
            category: "Low Maintenance Plants",
            plants: [
                {
                    name: "ZZ Plant",
                    image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Thrives in low light and requires minimal watering.",
                    cost: "$25"
                },
                {
                    name: "Pothos",
                    image: "https://cdn.pixabay.com/photo/2018/11/15/10/32/plants-3816945_1280.jpg",
                    description: "Tolerates neglect and can grow in various conditions.",
                    cost: "$10"
                },
                {
                    name: "Snake Plant",
                    image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
                    description: "Needs infrequent watering and is resilient to most pests.",
                    cost: "$15"
                },
                {
                    name: "Cast Iron Plant",
                    image: "https://cdn.pixabay.com/photo/2017/02/16/18/04/cast-iron-plant-2072008_1280.jpg",
                    description: "Hardy plant that tolerates low light and neglect.",
                    cost: "$20"
                },
                {
                    name: "Succulents",
                    image: "https://cdn.pixabay.com/photo/2016/11/21/16/05/cacti-1846147_1280.jpg",
                    description: "Drought-tolerant plants with unique shapes and colors.",
                    cost: "$18"
                },
                {
                    name: "Aglaonema",
                    image: "https://cdn.pixabay.com/photo/2014/10/10/04/27/aglaonema-482915_1280.jpg",
                    description: "Requires minimal care and adds color to indoor spaces.",
                    cost: "$22"
                }
            ]
        }
    ];

    const styleObj = {
        backgroundColor: '#4CAF50',
        color: '#fff!important',
        padding: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignIems: 'center',
        fontSize: '20px',
    }
    const styleObjUl = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '1100px',
    }
    const styleA = {
        color: 'white',
        fontSize: '30px',
        textDecoration: 'none',
    }

    const handleCartClick = (e) => {
        e.preventDefault();
        setShowCart(true); // Set showCart to true when cart icon is clicked
    };

    const handlePlantsClick = (e) => {
        e.preventDefault();
        setShowPlants(true); // Set showAboutUs to true when "About Us" link is clicked
        setShowCart(false); // Hide the cart when navigating to About Us
    };

    const handleContinueShopping = (e) => {
        e.preventDefault();
        setShowCart(false);
    };

    const handleAddToCart = (product) => {
        dispatch(addItem(product));

        setAddedToCart((prevState) => (
            {
                ...prevState,
                [product.name]: true,
            }
        ));
    };


    return (
        <div>
            <div className="navbar" style={styleObj}>
                <div className="tag">
                    <div className="luxury">
                        <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="" />
                        <a href="/paradise-nursery-shopping-cart-app/" style={{ textDecoration: 'none' }}>
                            <div>
                                <h3 style={{ color: 'white' }}>New Paradise Nursery</h3>
                                <i style={{ color: 'white' }}>Where Nature Embraces Tranquility</i>
                            </div>
                        </a>
                    </div>
                </div>
                <div style={styleObjUl}>
                    <div> <a href="#" onClick={(e) => handlePlantsClick(e)} style={styleA}>Plants</a></div>
                    <div> <a href="#" onClick={(e) => handleCartClick(e)} style={styleA}><h1 className='cart'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="68" width="68"><rect width="156" height="156" fill="none"></rect><circle cx="80" cy="216" r="12"></circle><circle cx="184" cy="216" r="12"></circle><path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="#faf9f9" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" id="mainIconPathAttribute"></path><text x="90" y="155" font-family="Verdana" font-size="90" fill="white">{cart.numOfItems}</text></svg></h1></a></div>
                </div>
            </div>
            {!showCart ? (
                <div>
                    {plantsArray.map((section, sectionIndex) => (
                        <div className="product-grid" key={sectionIndex}>
                            <h2 className="plant_heading">{section.category}</h2>
                            <div className="product-list">
                                {section.plants.map((plant, plantIndex) => (
                                    <div className="product-card" key={plantIndex}>
                                        <h3 className="product-title">{plant.name}</h3>
                                        <img className="product-image" src={plant.image} alt={plant.name} />
                                        <p className="product-price">{plant.cost}</p>
                                        <p>{plant.description}</p>
                                        {cart.items.some(item => item.name === plant.name) ? (
                                            <button className="product-button added-to-cart">Added to Cart</button>
                                        ) : (
                                            <button className="product-button" onClick={() => handleAddToCart(plant)}>Add to Cart</button>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <CartItem onContinueShopping={handleContinueShopping} />
            )}
        </div>
    );
}

export default ProductList;