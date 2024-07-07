import React from 'react';
import { Row, Col, Image, Button } from '@nutui/nutui-react'
import NavGrid from '../../components/Home/NavGrid/index'

import Api from '../../api'
function Home() {  
    const src = 'https://storage.360buyimg.com/imgtools/e067cd5b69-07c864c0-dd02-11ed-8b2c-d7f58b17086a.png'
    Api.get('/users')  
        .then(users => {  
            console.log(users);  
        })  
        .catch(error => {  
            console.error('There was an error!', error);  
        }); 
    return <>
        <Image
            className='w-full'
            src={ src }
            onClick={() => {
                console.log('click image')
            }}
        />
        <h1 className='mt-4 mb-4'>你好，商家</h1> 
        <NavGrid/>
    </>
}  
  
export default Home;