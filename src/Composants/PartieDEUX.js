import React from 'react';
import { useState } from 'react/cjs/react.development';
import { Button, Container, Input, Label } from 'semantic-ui-react';

const PartieDEUX = () => {

    const [couleur, setCouleur] = useState("")

    return (
        <div>
            <Container>
                <h2>changer couleur</h2>
                <li>orange</li>
                <li>olive</li>
                <li>teal</li>
                <Label pointing="right" color={couleur}>couleur </Label>
                <Input type="text" valeur={couleur} onChange={ (e)=> setCouleur(e.target.value)} ></Input>
                <Button color={couleur} >couleur</Button>
            </Container>
        </div>
    );
}

export default PartieDEUX;