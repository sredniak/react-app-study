import React from "react";

const UsersListItem = ({userData:{average, name, attendance}}) => (
    
        <li>
            <div>{average}</div>
            <div>
                <p>{name}</p>
                <p>{attendance}</p>
            </div>
            <button>
                x
            </button>
        </li>
    
);

UsersListItem.propTypes = {
    userData: PropTypes.shape({
        average: PropTypes.string,
        name: PropTypes.string.isRequired,
        attendance: PropTypes.string,
    }),
};

export default UsersListItem;