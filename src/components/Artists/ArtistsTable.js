import React from 'react';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import '../../styles/ArtistsTable.css';

const ArtistsTable = (props) => {
  const { allArtists } = props;
  const history = useHistory();

  const goToArtist = (id) => {
    history.push(`/artists/detail/${id}`);
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
            <tr key={artist._id}>
              <td onClick={() => goToArtist(artist._id)}>
                {artist.username ? artist.username : ''}
              </td>
              <td onClick={() => goToArtist(artist._id)}>
                {artist.address ? artist.address : ''}
              </td>
              <td onClick={() => goToArtist(artist._id)}>
                {artist.createdAt
                  ? moment(artist.createdAt).format('DD/MM/YYYY, h:mm a')
                  : ''}
              </td>
              <td onClick={() => goToArtist(artist._id)}>{`100`}</td>
              <td onClick={() => goToArtist(artist._id)}>{`20`}</td>
              <td>
                <button className='artist-blockBtn'>Block</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArtistsTable;
