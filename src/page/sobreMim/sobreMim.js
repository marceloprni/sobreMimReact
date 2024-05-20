import styles from './sobreMim.module.css';
import PostModelo from '../../componentes/PostModelo';
import fotoSobreMim from "assets/minha_foto.jpg";
import fotoCapa from "assets/sobre_mim_capa.png";

export default function SobreMim() {
    return (
        <PostModelo>
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
            
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Marcelo Perini
            </h3>
            
            <img
                src={fotoSobreMim}
                alt="Foto do Antônio Evaldo sorrindo"
                className={styles.fotoSobreMim}
            />

        </PostModelo> 
    )
}