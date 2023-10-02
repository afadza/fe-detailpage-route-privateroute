import { Component } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

type RouteParams = {
  id?: string;
}

interface DetailItem {
  name: string;
  imageUrl: string;
  categories: string[];
  description: string;
  badge: string;
}

interface DetailCardProps {
  id?: string;
}

interface DetailCardState {
  detailItem: DetailItem;
}

class DetailCard extends Component<DetailCardProps, DetailCardState> {
  constructor(props: DetailCardProps) {
    super(props);

    this.state = {
      detailItem: {
        name: '',
        imageUrl: '',
        categories: [],
        description: '',
        badge: '',
      },
    };
  }

  componentDidMount() {
    const { id } = this.props;

    axios
      .get(`https://api.npoint.io/624c99ed50dcd45fb160/${id}`)
      .then((response) => {
        const detailItemData = response.data;

        if (detailItemData) {
          this.setState({ detailItem: detailItemData });
        } else {
          console.error('Data not found');
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  render() {
    const { detailItem } = this.state;

    return (
      <div className='bg-[#0a192f] p-4 rounded h-screen sm:max-w-[700px] sm:mx-auto'>
        <div className='sm:flex'>
        <div className='w-full h-[200px] mb-4 sm:w-[50%]'>
          <img className='w-full h-full object-cover' src={detailItem.imageUrl} alt='' />
        </div>
        <div className='flex justify-between sm:flex-col sm:my-auto sm:pl-4'>
          <p className='font-bold text-white text-4xl'>{detailItem.name}</p>
          <p className='bg-slate-400 text-center my-auto rounded w-[20%] text-white'>{detailItem.badge}</p>
        </div>
        </div>
        <div className='mb-4'>
          <p className='text-[10px] text-blue-600'>{detailItem.categories.join(', ')}</p>
        </div>
        <div>
          <p className='text-xs text-white'>{detailItem.description}</p>
        </div>
      </div>
    );
  }
}

function DetailCardWrapper() {
  const { id } = useParams<RouteParams>();
  return <DetailCard id={id} />;
}

export default DetailCardWrapper;
