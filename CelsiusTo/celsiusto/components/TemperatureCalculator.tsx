import { useState } from 'react';
import styles from '../styles/temperaturecalculator.module.scss';
import { Typography, Grid, TextField, Button, Card, CardContent } from '@material-ui/core';
import Link from 'next/link';

export default function TemperatureCalculator() {

    const [kelvin, setToKelvin] = useState(0);
    const [farenheit, setToFarenheit] = useState(0);
    const [result, setResultKelvin] = useState(0);
    const [resultF, setResultFarenheit] = useState(0);

    function calcularKelvin() {
        const calculoKelvin = kelvin + 273;
        setResultKelvin(Number(calculoKelvin.toFixed(2)));
    }
    function calcularFarenheit() {
        const calculoFarenheit = farenheit * 9 / 5 + 32;
        setResultFarenheit(Number(calculoFarenheit.toFixed(2)));
    }
function zerar(){
    const [result, setResultKelvin] = useState(0);
}


    return (
        <div className={styles.calculator_area}>
            <div className={styles.body}>
                <Card className={styles.tempcard} variant="outlined">

                    <div >
                        <p>Transforme Celsius em Kelvin</p>
                        <Grid item className={styles.textfield}>
                            <TextField
                                label="Digite a temperatura Celsius"
                                variant="filled"
                                fullWidth
                                type="number"
                                onChange={({ target }) => setToKelvin(Number(target.value))}
                                
                            />
                        </Grid>


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

                        <div className={styles.result}>
                            {result === 0 ? ("") : (
                                <Typography>
                                    {kelvin}ºC correspondem a {result}K<br />
                                </Typography>
                            )}
                            
                        </div>

                    </div>

                </Card>
               
                <Card className={styles.tempcard} variant="outlined">
                    <div >
                        <p>Transforme Celsius em Farenheit</p>
                        <Grid item className={styles.textfield}>
                            <TextField
                                label="Digite a temperatura Celsius"
                                variant="filled"
                                fullWidth
                                type="number"
                                onChange={({ target }) => setToFarenheit(Number(target.value))}
                            />
                        </Grid>


                        <Grid item className={styles.textfield}>
                            <Button
                                variant="contained"
                                color="primary"
                                fullWidth
                                onClick={() => calcularFarenheit()}

                            >
                                Calcular
                            </Button>
                        </Grid>
                        <div className={styles.result}>
                            {resultF === 0 ? ("") : (
                                <Typography>
                                    {farenheit}ºC correspondem a {resultF}ºF<br />

                                </Typography>
                            )}
                        </div>




                    </div>
                </Card>
            </div>
          
            <Link href="/" >
                <a className="backlink">← Retornar para o início</a>
            </Link>

        </div >
    )
}