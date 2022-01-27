import React from 'react';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import { blockAndUnBlockArtist } from '../../redux/api';
import '../../styles/ArtistsTable.css';

const ArtistsTable = (props) => {
  const { allArtists, fetchArtistList } = props;
  const history = useHistory();

  const goToArtist = (id) => {
    history.push(`/artists/detail/${id}`);
  };

  const blockOrUnblock = async (id) => {
    try {
      await blockAndUnBlockArtist(id);
      fetchArtistList();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='table-wrapper' id='#scrollBar'>
      <table className='fl-table'>
        <thead>
          <tr>
            <th>Artist</th>
            <th>Location</th>
            <th>Start Date</th>
            <th>Total Orders</th>
            <th>Pending Orders</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allArtists?.map((artist) => (
            <tr key={artist.artistId}>
              <td
                style={{ textTransform: 'capitalize' }}
                onClick={() => goToArtist(artist.artistId)}
                className='cursor'
              >
                {artist.artistName ? artist.artistName : ''}
              </td>
              <td
                onClick={() => goToArtist(artist.artistId)}
                className='cursor'
              >
                {artist.address ? artist.address : ''}
              </td>
              <td
                onClick={() => goToArtist(artist.artistId)}
                className='cursor'
              >
                {artist.startDate
                  ? moment(artist.startDate).format('DD/MM/YYYY, h:mm a')
                  : ''}
              </td>
              <td
                onClick={() => goToArtist(artist.artistId)}
                className='cursor'
              >
                {artist.totalOrders}
              </td>
              <td
                onClick={() => goToArtist(artist.artistId)}
                className='cursor'
              >
                {artist.pendingOrders}
              </td>
              <td>
                <button
                  className='artist-blockBtn'
                  onClick={() => blockOrUnblock(artist.artistId)}
                >
                  {artist.blocked ? 'Unblock' : 'Block'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArtistsTable;
