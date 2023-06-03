import React ,{useState}from 'react';
import {useQuery } from 'react-query'
// components
import Drawer  from '@mui/material/Drawer';
import CircularProgress   from '@mui/material/CircularProgress';
import Grid  from '@mui/material/Grid';
import Item from './Item/Item';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Badge from '@mui/material/Badge';
import Cart from './Cart/Cart';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
// import {createTheme, colors} from  '@mui/material';
//styles
import { Wrapper } from './App.styles';
import { StyledButton } from './App.styles';


//Types
export type CartItemType = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  price: number;
  titel: string;
  amount: number;
  rate: string;
  rating: number;
};


const getProducts =async (): Promise<CartItemType[]> =>

   await (await fetch('https://fakestoreapi.com/products')).json();


// const theme =createTheme({
//     palette:{
//       secondary:{
//         main: colors.orange[500],
//         // main: "#BF4F74"
//       }
//     }
// });  


 function App() {

  const [iscartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);
  const { isLoading, error, data } = useQuery<CartItemType[]>('products', getProducts);
console.log(data);
  

  const getTotalItems =(items: CartItemType[])=>
    items.reduce((ack: number, item)=> ack + item.amount, 0)
  ;

  const handleAddToCart =(clickedItem: CartItemType)=>{
    setCartItems(prev => {
      //1-is the item already added in the cart?
      const isItemInCart = prev.find(item => item.id === clickedItem.id);
      if(isItemInCart){
        return prev.map(item=>(
          item.id === clickedItem.id ? {...item, amount: item.amount + 1 } : item
        ))
      }
      //first time the item is added
      return [...prev, {...clickedItem, amount: 1}];
    })
  };

  const handleRemoveFromCart =(id: number)=>{
    setCartItems(prev =>(
      prev.reduce((ack, item) =>{
        if(item.id === id){
          if(item.amount === 1){
            return ack;
          }
          return [...ack, {...item, amount: item.amount - 1}];
        }else{
          return [...ack, item]
        }
      },[] as CartItemType[])
    ))
  };

  if(isLoading) return <CircularProgress />;
  if(error) return <div className="">Something went wrong...</div>;


  return (<>
    
    <AppBar position="static">
      <Toolbar>
          <StyledButton onClick={()=>{setIsCartOpen(true)}} >
            <Badge badgeContent={getTotalItems(cartItems)} color='error'>
              <AddShoppingCartIcon/>
            </Badge>
          </StyledButton>
      </Toolbar>
    </AppBar>
    
    <Wrapper>
      <Drawer anchor='right' open={iscartOpen} onClose={() =>setIsCartOpen(false)}>
          <Cart cartItems={cartItems} 
          addToCart={handleAddToCart} 
          removeFromCart={handleRemoveFromCart}/>
      </Drawer>
      {/* <StyledButton onClick={()=>{setIsCartOpen(true)}} >
        <Badge badgeContent={getTotalItems(cartItems)} color='error'>
          <AddShoppingCartIcon/>
        </Badge>
      </StyledButton> */}
      <Grid container spacing={3}>
          {data?.map((item)=>(
            <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
                <Item item={item} handleAddToCart={handleAddToCart}/>
            </Grid>
          )) }
      </Grid>     
    </Wrapper>
    </>);
}

export default App;
