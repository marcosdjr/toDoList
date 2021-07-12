import styles from "../styles/calculadoraheader.module.scss";
import { Container, Grid, Typography } from '@material-ui/core';
import Link from 'next/link';

export default function Calculadora() {
    return (
        <div className={styles.header}>
            {/*fixed faz ele fixar grudado no topo, como uma barra de tarefas */}
            <Container fixed>
                {/*justify, etc, vieram do material-ui */}
                <Grid container justifyContent="center" alignItems="center" spacing={5}>
                    {/*item é algo fixo, de acordo com conceitos da responsividade*/}
                    <Grid item xs={12} sm={6}>
                        <Typography variant='h3' className={styles.header_title}>Caucule sem esquentar a cabeça!</Typography>
                        <Typography>Não se estresse. Aqui, te ajudamos com as operações básicas da matemática, pra que invista tempo no que realmente importa. </Typography>
                    </Grid>
                    <Grid container justifyContent="center" alignItems="center" item xs={12} sm={6} >
                        <img src="/images/math.png" alt="Imagem dos operadores matemáticos básicos (adição, subtração, multiplicação, divisão e igualdade)." />
                    </Grid>
                </Grid>
                
            </Container>

         </div>
    )

}