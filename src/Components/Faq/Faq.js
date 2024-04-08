import React from "react";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import "./Faq.css";

const Faq = () => {
  return (
    <>
      <section
        id="FAQ"
        className="m-0"
        style={{
          background: "rgba(235, 244, 255)",
          paddingTop: "50px",
          paddingBottom: "50px",
        }}
      >
        <div className="container faq mt-4">
          <div className="text-center my-2">
            <h1 className="servicesHeading">FREQUENTLY ASKED QUESTIONS</h1>
          </div>
          <div className="row my-3">
            <div className="col-lg-6 col-md-6 col-12">
              <Accordion defaultActiveKey="0">
                <Accordion.Item
                  eventKey="0"
                  className="mt-2"
                  style={{
                    backgroundColor: "#d8effd",
                    border: "1px solid #0091d1",
                  }}
                >
                  <Accordion.Header className="bg-blue">
                    HOW IS THE PRICE OF THE JOURNEY CALCULATED?
                  </Accordion.Header>
                  <Accordion.Body>
                    Our Prices are calculated according to the type of transport
                    requested, the technical skills of the participants, the
                    time slots. Do not hesitate to request a personalized quote
                    online or by telephone (it's free and does not commit you to
                    anything). Our prices are decreasing depending on the volume
                    of trips ordered. Do not hesitate to contact us for a
                    personalized quote.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                  eventKey="1"
                  className="mt-2"
                  style={{
                    backgroundColor: "#d8effd",
                    border: "1px solid #0091d1",
                  }}
                >
                  <Accordion.Header className="bg-blue">
                    WHAT ARE THE PRICES OF THE OPTIONS IN DETAIL?
                  </Accordion.Header>
                  <Accordion.Body>
                    The price of tolls and parking are the responsibility of the
                    customer, or it can be added in addition to the price of the
                    journey at the customer's request. Any additional PMR will
                    be invoiced at the price of additional support at the
                    customer's request; a baby seat can be installed in the
                    vehicle and will be invoiced at 5 euros including tax/baby
                    seat. Any pet (apart from a guide dog for the blind) is
                    charged at 10 euros including tax/pet. Beyond one bag per
                    passenger, any additional baggage is charged at 5 euros
                    including tax/bag. The minimum amount charged per journey is
                    59 euros including tax. Any wait beyond the first 10 minutes
                    will be charged.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                  eventKey="2"
                  className="mt-2"
                  style={{
                    backgroundColor: "#d8effd",
                    border: "1px solid #0091d1",
                  }}
                >
                  <Accordion.Header style={{ backgroundColor: "red" }}>
                    WHAT ARE THE SUPPLEMENTS FOR A SUNDAY OR PUBLIC HOLIDAY OR
                    AT NIGHT?
                  </Accordion.Header>
                  <Accordion.Body>
                    Conformément aux dispositions de la loi en vigueur, une
                    majoration des prix est appliquée: elle est de 20% pour les
                    trajets de nuit, et un supplément de 50 euros TTC pour les
                    trajets du dimanche et des jours fériés, et de 100% pour les
                    trajets du 1er mai. Quels sont vos engagements en termes de
                    véhicules et chauffeurs ? Tous nos véhicules sont aménagés
                    pour personne à mobilité réduite, et accessibles pour les
                    personnes en fauteuil roulant. Tous nos chauffeurs sont
                    qualifiés, experimentés, et détenteurs de l'AFPS
                    (attestation de formation premiers secours). Rigoureusement
                    sélectionnés pour leurs compétences ainsi que pour leurs
                    qualités et valeurs humaines.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <Accordion>
                <Accordion.Item
                  eventKey="3"
                  className="mt-2"
                  style={{
                    backgroundColor: "#d8effd",
                    border: "1px solid #0091d1",
                  }}
                >
                  <Accordion.Header>SERVICE QUALITY ?</Accordion.Header>
                  <Accordion.Body>
                    Nos prix sont un gage de qualité, parce que vous avez le
                    droit d'être éxigeant. tous nos intervenants sont payés
                    correctement, on a adopte une charte de qualité car notre
                    objectif est toujours mieux vous servir, n'attendez plus,
                    confiez-vous au professionnel du transport de personnes à
                    mobilité réduite.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                  eventKey="4"
                  className="mt-2"
                  style={{
                    backgroundColor: "#d8effd",
                    border: "1px solid #0091d1",
                  }}
                >
                  <Accordion.Header>LEXICON?</Accordion.Header>
                  <Accordion.Body>
                    le montant de la prise en charge : c'est le montant du
                    service d'accompagnement et installation et descente du
                    véhicule d'un PMR. le montant d'approche : c'est le montant
                    du trajet entre la position du véhicule disponible et le
                    lieu de prise en charge du client. Nous acceptons les
                    paiements par : Chéque, Espéce et CB
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                  eventKey="5"
                  className="mt-2"
                  style={{
                    backgroundColor: "#d8effd",
                    border: "1px solid #0091d1",
                  }}
                >
                  <Accordion.Header>ABOUT OUR PRICES?</Accordion.Header>
                  <Accordion.Body>
                    Nos Tarifs sont Clairs et Nets (aucun Frais
                    suplémentaire,aucune adhésion,ou frais de dossier,Un budget
                    maitrisé (vous connaissez à l'avance le prix des préstations
                    commandées). Nos Tarifs sont mis à jour le 1er janvier de
                    chaque année et ils sont à titre d'information, vous pouvez
                    avoir un devis personnalisé Gratuitement à tout moment par
                    téléphone ou en ligne via votre espace client. (Tous nos
                    prix sont exprimés en TTC). Nous acceptons les paiements par
                    virement, prélevement bancaire, chèque et Carte bancaire.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
          <div
            style={{
              textAlign: "center",
              marginTop: "50px",
            }}
          >
            <Button className="cardButton">Reserve Now</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
