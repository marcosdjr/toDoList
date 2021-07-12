import { useState } from 'react';
import styles from '../styles/imccalculator.module.scss';
import { Container, Typography, Grid, TextField, Button } from '@material-ui/core';
import Link from 'next/link';

export default function () {

    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [imc, setImc] = useState(0);

    function calcularImc() {
        const alturaEmMetros = altura / 100;
        const calculoDoImc = peso / (alturaEmMetros * alturaEmMetros);
        setImc(Number(calculoDoImc.toFixed(2)));


    }

    function tipoDoImc() {
        if (imc < 18.5) return (<strong className={styles.abaixo}>Abaixo do peso</strong>)
        if (imc < 24.9) return (<strong className={styles.normal}>Peso normal</strong>)
        if (imc < 29.9) return (<strong className={styles.med}>Sobrepeso</strong>)
        if (imc < 34.9) return (<strong className={styles.grau1}>Obesidade grau 1</strong>)
        if (imc < 39.9) return (<strong className={styles.grau2}>Obesidade grau 2</strong>)
        if (imc >= 40) return (<strong className={styles.grau3}>Obesidade grau 3</strong>)

    }

    return (
        <div className={styles.calculator_area}>
            <Container maxWidth={"xs"}>
                <Grid container direction="column" spacing={2}>

                    <Grid item>
                        <TextField
                            label="Altura em cm"
                            variant="filled"
                            fullWidth
                            type="number"
                            onChange={({ target }) => setAltura(Number(target.value))}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            label="Peso em kg"
                            variant="filled"
                            fullWidth
                            type="number"
                            onChange={({ target }) => setPeso(Number(target.value))}

                        />
                    </Grid>

                    <Grid item>
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            onClick={() => calcularImc()}

                        >
                            Calcular
                        </Button>
                    </Grid>

                    <div className={styles.result}>
                        {imc === 0 ? ("") : (
                            <Typography>
                                O IMC é: {imc} Kg/m² <br />
                                Classificação: {tipoDoImc()}
                            </Typography>
                        )}
                    </div>

                </Grid>
            </Container>
            <Link href="/">
                <a className="backlink">← Retornar para o início</a>
            </Link>
        </div>
    )
}