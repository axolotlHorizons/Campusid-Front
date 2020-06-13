import React from 'react';
import ImageCard from '../Card/ImageCard';

function ContainerEvent(props: any) {
    return (
        <ImageCard
            image={
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdpjf8cvmfdoFKsWWt-waWfxvQEkHjmizgN0bhVfoZxxiYTMWs&usqp=CAU'
            }
            title={' Salon Studyrama'}
            text={
                'Studyrama organise en janvier 2021 à NICE, le 22 ème salon Studyrama des Etudes supérieures. C’est le rendez-vous à ne pas manquer pour trouver sa formation de Bac à Bac +5 et réussir son orientation. Que vous soyez lycéen à la recherche d’ une formation supérieure, ou étudiant(e) et en quête d’une réorientation ou d’une spécialisation, venez à la rencontre des responsables de votre future formation!'
            }
            hasButton={false}
            buttonText={'détails'}
            altImage={'offre de stage'}
            textCompany={''}
            typeDeMission={''}
            duree={''}
            start={''}
            end={''}
            contact={''}
            phone={''}
            mail={''}
            adress={''}
            postal={''}
            ville={''}
            pays={''}
        />
    );
}

export default ContainerEvent;
