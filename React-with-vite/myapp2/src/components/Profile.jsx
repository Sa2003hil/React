// import React from 'react';
import PropTypes from 'prop-types';  // this is used for props validation

const Profile = ({ title, description, size, img }) => (
    <div>
        <img src={img.src} alt={title} height={img.height} width={img.width} />
        <h1>{title}</h1>
        <p>{description}</p>
        <p>Size: {size}</p>
    </div>
);

// Props Validation is used to check the type of props passed wheather it is string, number, object, array etc.
// If the type of props passed is not same as the type of props defined then it will throw an error in the console.
Profile.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    img: PropTypes.shape({
        src: PropTypes.string.isRequired,
        height: PropTypes.string.isRequired,
        width: PropTypes.string.isRequired,
    }).isRequired,
};

export default Profile;

