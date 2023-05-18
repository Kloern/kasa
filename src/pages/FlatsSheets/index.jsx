import logements from '../../datas/logements.json'
import { useLocation } from 'react-router-dom';
import styles from './flatsSheets.module.css'
import Diaporama from '../../components/Diaporama';
import DetailsLogements from '../../components/DetailsLogements';
import Logements from '../../components/Logements';

export default function FlatsSheets() {
    const sampleLocation = useLocation();

    return (
        <>
            {logements.map((flat) => sampleLocation.pathname.endsWith(flat.id) &&
                <section key={flat.id} className={styles.flatSheet}>
                    <Diaporama title={flat.title} pictures={flat.pictures} />
                    <DetailsLogements title={flat.title} location={flat.location} tags={flat.tags} hostName={flat.host.name} hostPicture={flat.host.picture} rating={flat.rating}/>
                    <Logements description={flat.description} equipments={flat.equipments} />
                </section>)

            }

        </>
    )
}