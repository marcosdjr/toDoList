import styles from "../styles/imcheader.module.scss";
import { Container, Grid, Typography } from '@material-ui/core'


export default function Header() {
    return (
        <div className={styles.header}> 
            {/*fixed faz ele fixar grudado no topo, como uma barra de tarefas */}
            <Container fixed>
                {/*justify, etc, vieram do material-ui */}
                <Grid container justify="center" alignItems="center" spacing={5}>
                     {/*item é algo fixo, de acordo com conceitos da responsividade*/}
                    <Grid item xs={12} sm={6}>
                        <Typography variant='h3' className={styles.header_title}>Calcule o seu IMC</Typography>
                        <Typography>o IMC é o índice de Massa Corporal e é utilizado para saber se o peso está de acordo com a altura.

                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <img src="/images/medic.png" alt="Imagem de um médico avaliando un paciente." />
                    </Grid>
                </Grid>
            </Container>



        </div>
    )

}