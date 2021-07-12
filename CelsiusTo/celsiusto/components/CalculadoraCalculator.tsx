import { useState } from 'react';
import styles from '../styles/temperaturecalculator.module.scss';
import { Typography, Grid, TextField, Button, Card, Radio, RadioGroup, FormControl, FormControlLabel, FormHelperText, FormLabel } from '@material-ui/core';
import Link from 'next/link';

export default function CalculadoraCalculator() {


    const [resultado, setResultado] = useState(0);


    const operador = (event) => {
        event.preventDefault();
    }



    const [value, setValue] = useState('');
    const [v1, setToV1] = useState(0);
    const [v2, setToV2] = useState(0);
    
    const [contao, setContao] = useState(0)

    const handleRadioChange = (event) => {
        setValue(event.target.value);

    }

    function conta() {
        if (value === "+") {
            const continha = v1+v2
            setContao(continha)
        } else if (value === "-") {
            const continha = v1-v2
            setContao(continha)
        } else if (value === "x") {
            const continha = v1*v2
            setContao(continha)
        } else if (value === "/") {
            const continha = v1/v2
            setContao(continha)
        }
        else { setContao(0)}
    }

    return (
        <div className={styles.calculator_area}>
            <div className={styles.body}>
                <Card className={styles.tempcard} variant="outlined">

                    <div >

                        <Grid item className={styles.textfield}>
                            <TextField
                                label="Digite o primeiro valor"
                                variant="filled"
                                fullWidth
                                type="number"
                                onChange={({ target }) => setToV1(Number(target.value))}

                            />
                        </Grid>
                        <Grid item className={styles.textfield}>
                            <TextField
                                label="Digite o segundo valor"
                                variant="filled"
                                fullWidth
                                type="number"
                                onChange={({ target }) => setToV2(Number(target.value))}

                            />
                        </Grid>
                        <form onSubmit={operador}>
                            <FormControl component="fieldset" error={false} >
                                <FormLabel component="legend">Escolha a operação desejada</FormLabel>
                                <RadioGroup aria-label="operacao" name="operacao" value={value} onChange={handleRadioChange}>
                                    <FormControlLabel value="+" control={<Radio />} label="+" />
                                    <FormControlLabel value="-" control={<Radio />} label="-" />
                                    <FormControlLabel value="x" control={<Radio />} label="x" />
                                    <FormControlLabel value="/" control={<Radio />} label="/" />
                                </RadioGroup>
                                
                                <Button type="submit"
                                    variant="outlined"
                                    color="primary"
                                    onClick={() => conta()} >
                                    Calcular
                                </Button>
                            </FormControl>
                        </form>

                        <div className={styles.result}>

                            <Typography>
                                <br />
                                Resultado: {contao} 
                                <br />

                            </Typography>

                        </div>

                        <Grid item className={styles.textfield}>
                            <Button
                                variant="contained"
                                color="primary"
                                fullWidth
                                onClick={() => calcularKelvin()}

                            >
                                Calcular
                            </Button>
                        </Grid>



                    </div>

                </Card>
            </div>

            <Link href="/" >
                <a className="backlink">← Retornar para o início</a>
            </Link>

        </div >
    )
}