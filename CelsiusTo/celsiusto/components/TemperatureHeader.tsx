import styles from "../styles/temperatureheader.module.scss";
import { Container, Grid, Typography } from '@material-ui/core';
import Link from 'next/link';

export default function Temperature() {
    return (
        <div className={styles.header}>
            {/*fixed faz ele fixar grudado no topo, como uma barra de tarefas */}
            <Container fixed>
                {/*justify, etc, vieram do material-ui */}
                <Grid container justifyContent="center" alignItems="center" spacing={5}>
                    {/*item é algo fixo, de acordo com conceitos da responsividade*/}
                    <Grid item xs={12} sm={6}>
                        <Typography variant='h3' className={styles.header_title}>Temperatura certa a um clique!</Typography>
                        <Typography>Não passe frio, nem calor. Aqui, te ajudamos com as principais escalas de temperatura.

                        </Typography>
                    </Grid>
                    <Grid container justifyContent="center" alignItems="center" item xs={12} sm={6} >
                        <img src="/images/termometroazul.png" alt="Imagem de um médico avaliando un paciente." />
                    </Grid>
                </Grid>
                
            </Container>

         </div>
    )

}