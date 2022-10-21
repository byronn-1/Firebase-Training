import React  from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './Button';
import { CenteredContentBox } from './CenteredContentBox';
import { Heading } from './Heading';

export const LanderPage = ({
    heading,
    message,
    buttonText,
    redirectUrl,
}) => {
    const navigate = useNavigate()

    return (
        <CenteredContentBox>
            <Heading>{heading}</Heading>
            <p>{message}</p>
            <Button onClick={() => {
                navigate(redirectUrl);
            }}>{buttonText}</Button>
        </CenteredContentBox>
    );
}