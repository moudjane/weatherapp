import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonList } from '@ionic/react';
import CurrentWeather from '../components/CurrentWeather';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      {/* <IonHeader>
        <IonToolbar>
          <IonTitle>Current Weather</IonTitle>
        </IonToolbar>
      </IonHeader> */}
      <IonContent fullscreen>
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Current Weather</IonTitle>
          </IonToolbar>
        </IonHeader> */}

        <CurrentWeather />

        {/* <IonItem>
          <IonLabel>Your city:</IonLabel>
          <IonInput placeholder="Enter city name"></IonInput>
        </IonItem> */}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
