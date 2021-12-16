import React, { useState } from 'react';
import { Button, Container, Divider, Input } from 'semantic-ui-react';
import Dices from './JeuDe';

const PartieUN = () => {

    return (
        <>
            <h2 style={{ textAlign: "center", color: "antiquewhite" }}>Le hasard des dés </h2>
            <Dices />
        </>
    )
}

export default PartieUN;