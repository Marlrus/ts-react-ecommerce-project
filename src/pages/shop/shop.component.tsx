import React from 'react'

import SHOP_DATA from './shop.data.js'

import CollectionPreview from '../../components/collection-preview/collection-preview.component'

interface ShopPageState {
	collections: {
		id: number;
		title: string;
		routeName: string;
		items: {
			id: number;
			name: string;
			imageUrl: string;
			price: number;
		}[];
	}[]
}


class ShopPage extends React.Component <any, ShopPageState> {
   constructor(props: any){
      super(props)

      this.state = {
			collections: SHOP_DATA
		}
		
	}
	
	render() {
		const { collections } = this.state
		return (<div className="shop-page">
			{
				collections.map(({id, ...otherCollectionProps}) => (
					<CollectionPreview key={id} {...otherCollectionProps } />
				))
			}
		</div>)
	}
}

export default ShopPage