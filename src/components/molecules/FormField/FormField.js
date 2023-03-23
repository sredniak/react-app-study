//komponent Reactowy
import React from "react";
import { Label } from "components/atoms/Label/Label";
import { Input } from "components/atoms/Input/Input";
import PropTypes from "prop-types";
import styled from "styled-components";


const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
    align-items: flex-start;

    label{
        margin: 10px;
    }
`;


//wyciągamy propsy
const FormField = ({label, name, id, type = 'text', ...props}) => {
    return (

        <Wrapper>
        <Label htmlFor={id}>{label}</Label>
        {/* przekazujemy propsy */}
        <Input name={name} id={id} type={type} />
        </Wrapper>


    )
    
};

FormField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    type: PropTypes.string,
}

export default FormField;

