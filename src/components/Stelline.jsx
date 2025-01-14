// Funzione per creare le stelline usando Font Awesome
export const renderStars = (rating) => {
  const fullStars = Math.floor(rating / 2); // Numero di stelle piene
  const halfStar = rating % 2 !== 0; // Verifica se c'è una mezza stella
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); // Calcola le stelle vuote

  const stars = [];

  // Aggiungi le stelle piene
  for (let i = 0; i < fullStars; i++) {
    stars.push(<i className="fas fa-star" key={`full-${i}`} />);
  }

  // Aggiungi la mezza stella
  if (halfStar) {
    stars.push(<i className="fas fa-star-half-alt" key="half" />);
  }

  // Aggiungi le stelle vuote
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<i className="far fa-star" key={`empty-${i}`} />);
  }

  return stars;
};
