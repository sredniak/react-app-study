import React from "react";
import PropTypes from 'prop-types';
import {ReactComponent as DeleteIcon} from "assets/icons/delete-icon.svg";
import Button from "components/atoms/Button/Button";
import { StyledAverage, StyledInfo, Wrapper } from "./UserListItem.style";


const UsersListItem = ({userData:{average, name, attendance = '0%'}}) => (
    
        <Wrapper>
            <StyledAverage value={average}>{average}</StyledAverage>
            <StyledInfo>
                <p>
                    {name}
                    <Button />
                </p>
                <p>attendance: {attendance}</p>
            </StyledInfo>
        </Wrapper>
);

UsersListItem.propTypes = {
    userData: PropTypes.shape({
        average: PropTypes.string,
        name: PropTypes.string.isRequired,
        attendance: PropTypes.string,
    }),
};

export default UsersListItem;