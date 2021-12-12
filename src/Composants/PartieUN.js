import React, { useState } from 'react';
import { Button, Container, Divider, Input } from 'semantic-ui-react';

const PartieUN = () => {

    const [titre, setTitre] = useState("")
    const [titres, setTitres] = useState ([])

    const ajouter = () => {

        if (titre !== "") {
            const newTitres = [...titres, titre];
            setTitres(newTitres);
            setTitre("");
        }
    }

    return (
        <Container>
            <Divider horizontal></Divider>

            <Input type="text" value={titre} onChange={(e) => { setTitre(e.target.value) }} ></Input>
            <Button onClick={ajouter} > Ajouter </Button>

            <h5>Le titre: {titre} </h5>
            <h7>Les titres :</h7>
            <ul>
                {titres.map((t)=>{
                    return<li>{t}</li>
                })}
            </ul>
        </Container>
    )
}

export default PartieUN;