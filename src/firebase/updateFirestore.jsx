// import React, { useEffect } from 'react';
// import firebase from 'firebase/app';
// import 'firebase/firestore';

// const UpdateFirestoreData = () => {
//   useEffect(() => {
//     const updateFirestore = async () => {
//       try {
//         // Initialize Firebase
//         const firebaseConfig = {
//           // Your Firebase configuration
//         };
//         if (!firebase.apps.length) {
//           firebase.initializeApp(firebaseConfig);
//         }
        
//         // Get a reference to the Firestore collection
//         const collectionRef = firebase.firestore().collection('blogs');

//         // Retrieve existing documents
//         const snapshot = await collectionRef.get();

//         // Update each document
//         snapshot.forEach(async doc => {
//           const docRef = collectionRef.doc(doc.id);
//           await docRef.update({ newField: 'uid' });
//           console.log(`Field added to document: ${doc.id}`);
//         });
//       } catch (error) {
//         console.error('Error updating Firestore:', error);
//       }
//     };

//     // Call the function to update Firestore data
//     updateFirestore();
//   }, []);

//   return (
//     <div>
//       {/* Optional: Display loading or status message */}
//     </div>
//   );
// };

// export default UpdateFirestoreData;
