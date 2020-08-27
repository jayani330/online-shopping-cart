import React, {Component} from 'react'

export const DataContext = React.createContext();

export class DataProvider extends Component{

    state = {
        products: [
            {
                "_id": "1",
                "title": "Watch 01",
                "src": "https://cs2.livemaster.ru/storage/ec/e0/cb1751bd37b8350aa4be3327f6ki--watches-women-s-wrist-watch-bracelet-with-flowers-leather-wat.jpg",
                "description": "Time is new fashion!",
                "content": "Welcome to the most amazing fashion watches shope. Watch is no longer just an accessory, its your pride. We add fashion to your time with the luxury at your hand.",
                "price": 23,
                "colors": ["#ff3333", "white", "black", "#cc99ff","#fdab9f"],
                "count": 1
            },

            {
                "_id": "2",
                "title": "Watch 02",
                "src": "https://i1.wp.com/www.watch4today.com/wp-content/uploads/2019/02/IBSO-Brand-Luxury-Ladies-Quartz-Watch-Leather-Strap-Montre-Femme-2018Fashion-Women-Wrist-Watches-Relogio-Feminino.jpg?fit=800%2C800&ssl=1",
                "description": "Time is new fashion!",
                "content": "Welcome to the most amazing fashion watches shope. Watch is no longer just an accessory, its your pride. We add fashion to your time with the luxury at your hand.",
                "price": 25,
                "colors": ["red", "white", "crimson", "gray"],
                "count": 1
            },

            {
                "_id": "3",
                "title": "Watch 03",
                "src": "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/W/o/Women-s-Wrist-Watch---Gold-8022622_1.jpg",
                "description": "Time is new fashion!",
                "content": "Welcome to the most amazing fashion watches shope. Watch is no longer just an accessory, its your pride. We add fashion to your time with the luxury at your hand.",
                "price": 20,
                "colors": ["#494d5f", "white", "black", "gold"],
                "count": 1
            },

            {
                "_id": "4",
                "title": "Watch 04",
                "src": "https://www.slebay.lk/image/cache/data/Produ/watch%20man/$%20119%2009%205442%201-1000x1000.jpg",
                "description": "Time is new fashion!",
                "content": "Welcome to the most amazing fashion watches shope. Watch is no longer just an accessory, its your pride. We add fashion to your time with the luxury at your hand.",
                "price": 19,
                "colors": ["#ff6600", "white", "black", "#cc0000"],
                "count": 1
            },

            {
                "_id": "5",
                "title": "Watch 05",
                "src": "https://www.dhresource.com/0x0/f2/albu/g4/M01/06/09/rBVaEFmNeGGALO52AADwHrcYfbs030.jpg",
                "description": "Time is new fashion!",
                "content": "Welcome to the most amazing fashion watches shope. Watch is no longer just an accessory, its your pride. We add fashion to your time with the luxury at your hand.",
                "price": 25,
                "colors": ["#cd6155", "white", "gold", "silver"],
                "count": 1
            },

            {
                "_id": "6",
                "title": "Watch 06",
                "src": "https://li0.rightinthebox.com/images/384x384/201603/nvttuu1458810450479.jpg",
                "description": "Time is new fashion!",
                "content": "Welcome to the most amazing fashion watches shope. Watch is no longer just an accessory, its your pride. We add fashion to your time with the luxury at your hand.",
                "price": 30,
                "colors": ["#2d545e", "white", "#9df9ef", "pink"],
                "count": 1
            }
            
        ],
        cart: [],
        total: 0
    };


    addCart = (id) =>{
        const {products, cart} = this.state;

        const check = cart.every(item =>{
            return item._id !== id
        })

        if(check){
            const data = products.filter(product =>{
                return product._id === id 
            })
    
            this.setState({cart: [...cart,...data]})
        }
        else{
            alert("This product has been added to the cart.")
        }
    };


    reduction = id =>{
        const{cart} = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count === 1 ? item.count = 1 : item.count -= 1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };


    increase = id =>{
        const{cart} = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count += 1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };


    removeProduct = id =>{
        if(window.confirm("Do you want to delete this product?")){
            const{cart} = this.state;
            cart.forEach((item, index) =>{
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })
            this.setState({cart: cart});
            this.getTotal();
        }
       
    };


    removeAll = () => {
        this.setState({cart: []});
    };

    
    
    getTotal = () =>{
        const{cart} = this.state;
        const res = cart.reduce((prev, item) =>{
            return prev + (item.price * item.count);
        },0)
        this.setState({total: res})
    }; 


    componentDidUpdate(){
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    }

    componentDidMount(){
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            this.setState({cart: dataCart});
        }

        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            this.setState({total: dataTotal});
        }
    }




    render(){
        const {products, cart, total} = this.state;
        const{addCart, reduction, increase, removeProduct, getTotal, removeAll} = this;

        return(
            <DataContext.Provider value={{products, addCart, cart, reduction, increase, removeProduct, total, getTotal,removeAll}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}
