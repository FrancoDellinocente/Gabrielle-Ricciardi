import './Home.css'
import { Link } from 'react-router-dom';

const Home = () => {


  return (
    <div className='Home'>
        <div className='Home__texts'>
            <svg id="Capa_1"  className='Home__logo' data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 449.64 81.69">
              <path
                      className="cls-1" d="M15.13,81.6a17.71,17.71,0,0,1-6.67-1.4,8.84,8.84,0,0,1-4.89-4.47,6,6,0,0,1-.72-2.33A22.24,22.24,0,0,1,2.72,71V70a4.2,4.2,0,0,1,.17-1.23.79.79,0,0,1,.85-.56.15.15,0,0,1,.17.17,7,7,0,0,1-.08,1,6.4,6.4,0,0,0-.09,1.11,7.22,7.22,0,0,0,2.51,6,9.57,9.57,0,0,0,6.25,2,19.13,19.13,0,0,0,9.85-2.64,29.38,29.38,0,0,0,8.17-7.22,55.47,55.47,0,0,0,5.82-8.63,79.06,79.06,0,0,0,3.95-8.54l3.48-8.93a23.42,23.42,0,0,1-6.12,6.08,35.61,35.61,0,0,1-8.45,4.42,25.54,25.54,0,0,1-8.8,1.66,22.88,22.88,0,0,1-8.46-1.57,14.47,14.47,0,0,1-6.33-4.72,12.71,12.71,0,0,1-2.38-7.91A28.72,28.72,0,0,1,5.35,29.75a40.32,40.32,0,0,1,5.7-9.82,42.72,42.72,0,0,1,8-7.86,34.26,34.26,0,0,1,9.05-4.85A30,30,0,0,1,38.33,5.35a25.3,25.3,0,0,1,4,.3,14,14,0,0,1,3.82,1.23A7.94,7.94,0,0,1,48.88,8.8a3.79,3.79,0,0,1,1,2.59v.42a.91.91,0,0,1-.09.43,9.71,9.71,0,0,1-1.57,3.1A15.32,15.32,0,0,0,46.33,19c-.06.23-.37.42-.94.56s-.79.1-.68-.13a9.19,9.19,0,0,0,1.06-2.72,13.7,13.7,0,0,0,.38-3.23,11.62,11.62,0,0,0-.21-2.25,5,5,0,0,0-.72-1.83,4.56,4.56,0,0,0-2.64-2.13,12.13,12.13,0,0,0-3.82-.59,18.57,18.57,0,0,0-3.91.42,29.78,29.78,0,0,0-3.4.94A30.69,30.69,0,0,0,22,13.6a41.17,41.17,0,0,0-7.1,8.07A44,44,0,0,0,10,31.11a26.77,26.77,0,0,0-1.78,9.26A13.69,13.69,0,0,0,10,47.68a10.49,10.49,0,0,0,4.63,4.13,14.94,14.94,0,0,0,6.21,1.31,22.84,22.84,0,0,0,12.11-3.18,29.87,29.87,0,0,0,8.88-8.38,41.59,41.59,0,0,0,5.61-11.13H38.67c-.67,0-1.61,0-2.8.13a21.09,21.09,0,0,0-3.66.59,8.11,8.11,0,0,0-3.14,1.49,3.39,3.39,0,0,0-1.28,2.8A5,5,0,0,0,28,36.68c.12.42.2.75.26,1l-.76.51c-.4-.73-.87-1.51-1.41-2.33a5,5,0,0,1-.89-2A6.41,6.41,0,0,1,25.25,32a3.29,3.29,0,0,1,1.1-1.95,5.54,5.54,0,0,1,2.93-1.23,25.59,25.59,0,0,1,3.95-.3c1.25,0,2.44,0,3.58.13s2,.12,2.71.12H55.67l-.93,1a10.29,10.29,0,0,0-2.64.39,4.34,4.34,0,0,0-2.37,1.57,17.31,17.31,0,0,0-2.85,5.35c-.65,2-1.32,4.08-2,6.29q-1.7,6-3.32,11.86a57.55,57.55,0,0,1-4.29,11.05A32.23,32.23,0,0,1,29.5,76a25,25,0,0,1-6.81,4A20.08,20.08,0,0,1,15.13,81.6Z" transform="translate(-2.72 0.09)"/><path className="cls-1" d="M63.41,52.27A2.85,2.85,0,0,1,62,51.93a1.34,1.34,0,0,1-.59-1.27A7.78,7.78,0,0,1,62,47.94a32.49,32.49,0,0,1,1.36-3c.51-1,1-1.8,1.36-2.42q-3,3.15-6.2,6A28.48,28.48,0,0,1,54.91,51a7.92,7.92,0,0,1-4.17,1.19,1.29,1.29,0,0,1-1.19-.55,2.54,2.54,0,0,1-.34-1.32,1.44,1.44,0,0,1,.09-.6,22.77,22.77,0,0,1,2.12-6.88,36,36,0,0,1,4.17-6.72,28.93,28.93,0,0,1,5-5.1A10.28,10.28,0,0,1,67,28.81h9.77c.29,0,.43.12.43.34,0,.46-.26.68-.77.68a2.33,2.33,0,0,0-1.7,1.07,20.88,20.88,0,0,0-1.27,1.74c-.4.62-1,1.67-1.87,3.14S69.85,38.86,69,40.59s-1.63,3.33-2.26,4.8a9.63,9.63,0,0,0-.93,3.23A1.05,1.05,0,0,0,67,49.81a5.11,5.11,0,0,0,2.89-1.19,25.14,25.14,0,0,0,3.27-2.93c1.11-1.16,2.13-2.33,3.06-3.49l2.25-2.76c.34.34.33.81,0,1.4a11.52,11.52,0,0,1-1,1.4,56.21,56.21,0,0,1-3.91,4.55,22.93,22.93,0,0,1-4.8,3.91A10.11,10.11,0,0,1,63.41,52.27Zm-9.18-3a5.36,5.36,0,0,0,2.85-1.49,43.49,43.49,0,0,0,4-3.74,53.74,53.74,0,0,0,4-4.76,53.57,53.57,0,0,0,3.11-4.59,7.16,7.16,0,0,0,1.23-3.19,1.39,1.39,0,0,0-.55-1.27,2.63,2.63,0,0,0-1.41-.34,5.66,5.66,0,0,0-2.93,1A14.33,14.33,0,0,0,62,32.81a18.8,18.8,0,0,0-2.42,2.93c-.93,1.33-1.86,2.79-2.76,4.38a44.68,44.68,0,0,0-2.3,4.59,9.78,9.78,0,0,0-.93,3.57C53.55,49,53.77,49.3,54.23,49.3Z" transform="translate(-2.72 0.09)"/><path className="cls-1" d="M80.41,52.78a10.86,10.86,0,0,1-2.64-.38,1.8,1.8,0,0,1-1.53-1.91,4.37,4.37,0,0,1,.26-1.36c.17-.51.34-1,.51-1.36.56-1.47,1.16-3,1.78-4.51s1.28-3.08,2-4.67c-.74.85-1.43,1.63-2.08,2.34s-1.12,1.23-1.41,1.57-.31.34-.42.34-.17-.14-.17-.43a2.17,2.17,0,0,1,.42-1.27c.8-1,1.7-2.1,2.72-3.23s2-2.32,3-3.57a139.75,139.75,0,0,1,8-14.49,68.88,68.88,0,0,1,9.94-12.46c1.14-1.07,2.41-2.18,3.83-3.31a24.31,24.31,0,0,1,4.55-2.89A10.83,10.83,0,0,1,113.9,0a4.29,4.29,0,0,1,2.34.68,2.52,2.52,0,0,1,1.14,2.12V5.27c0,.23-.17.34-.51.34-.17,0-.25-.06-.25-.17a1.79,1.79,0,0,0-1.19-1.83,6.55,6.55,0,0,0-2.38-.47,15.13,15.13,0,0,0-8.42,2.43A25.75,25.75,0,0,0,98,11.86a55.29,55.29,0,0,0-5.18,8.5Q90.53,25,88.7,29.45t-3.45,8c0,.23,0,.34.09.34a13.57,13.57,0,0,0,1.4-1.32c.88-.88,2-1.91,3.32-3.1a27.37,27.37,0,0,1,4.2-3.1,8.11,8.11,0,0,1,4.08-1.32,1.12,1.12,0,0,1,1.19.64,3.71,3.71,0,0,1,.26,1.4v.76a23.36,23.36,0,0,1-2.17,6.8,33.69,33.69,0,0,1-4.42,6.93,24.29,24.29,0,0,1-6,5.31A12.73,12.73,0,0,1,80.41,52.78Zm1.36-1.44a5.32,5.32,0,0,0,2.93-1.06,16.15,16.15,0,0,0,2.42-1.92,20.37,20.37,0,0,0,2.47-2.93,47.27,47.27,0,0,0,2.8-4.38,42.74,42.74,0,0,0,2.3-4.59,9.78,9.78,0,0,0,.93-3.57,1.6,1.6,0,0,0-.17-.76.6.6,0,0,0-.59-.34,3.72,3.72,0,0,0-2,.93A33.92,33.92,0,0,0,90.23,35q-1.41,1.32-2.55,2.55c-.77.82-1.32,1.43-1.66,1.82a36.9,36.9,0,0,0-2.38,3,38.75,38.75,0,0,0-2.59,4,7.08,7.08,0,0,0-1.15,3.36C79.9,50.77,80.52,51.34,81.77,51.34Z" transform="translate(-2.72 0.09)"/><path className="cls-1" d="M100.21,53.21c-.22,0-.22-.23,0-.68a14.17,14.17,0,0,0,.81-1.7c.26-.62.52-1.3.81-2,.56-1.36,1.19-2.89,1.87-4.59s1.33-3.36,2-5,1.18-3,1.66-4.17.81-1.91,1-2.25c-.8.85-1.74,1.91-2.85,3.19s-2.14,2.5-3.1,3.69-1.7,2.13-2.21,2.81c-.17.23-.31.34-.43.34s-.17-.14-.17-.43a2.11,2.11,0,0,1,.43-1.27l3.61-4.59c1.33-1.7,2.54-3.27,3.61-4.72s1.76-2.39,2-2.85l2.77-.51a5.37,5.37,0,0,0,2.5-.93.74.74,0,0,1,.51-.26c.12,0,.19.1.22.3a.92.92,0,0,1-.22.64,12.29,12.29,0,0,0-1.48,2.21c-.66,1.13-1.38,2.44-2.17,3.91l-2.3,4.25c.57-.85,1.32-1.86,2.26-3a37.39,37.39,0,0,1,3.1-3.4,21.67,21.67,0,0,1,3.44-2.76,6.15,6.15,0,0,1,3.27-1.11,3.53,3.53,0,0,1,1.87.47,3,3,0,0,1,1.19,1.66,3.44,3.44,0,0,1,.26,1.36,5.69,5.69,0,0,1-.72,2.76c-.49.88-.84,1.55-1.07,2-.05.17-.25.33-.59.47s-.48.1-.43-.13a8.32,8.32,0,0,0,.13-.85,9.06,9.06,0,0,0,0-.94,6.13,6.13,0,0,0-.55-2.63,2,2,0,0,0-2-1.19,5.6,5.6,0,0,0-3.31,1.7A41.19,41.19,0,0,0,112,36.89a33.86,33.86,0,0,0-3.91,5.48,37.45,37.45,0,0,0-2.38,5.06c-.34.91-.68,1.8-1,2.68s-.6,1.57-.77,2.08a7,7,0,0,0-2.21.55A4.85,4.85,0,0,1,100.21,53.21Z" transform="translate(-2.72 0.09)"/><path className="cls-1" d="M125.71,52.27a2.62,2.62,0,0,1-1.4-.34,1.36,1.36,0,0,1-.55-1.27,8,8,0,0,1,.63-2.81c.43-1.07.91-2.15,1.45-3.23s1-1.95,1.23-2.63.89-1.83,1.49-3.1l1.7-3.66c.54-1.16.92-2,1.15-2.42q-1.2,1.27-2.85,3.19t-3.1,3.69c-1,1.19-1.7,2.13-2.21,2.81-.17.23-.31.34-.43.34s-.17-.14-.17-.43a2.11,2.11,0,0,1,.43-1.27l3.61-4.59c1.33-1.7,2.54-3.27,3.61-4.72s1.76-2.39,2-2.85l2.76-.51a5.37,5.37,0,0,0,2.51-.93.74.74,0,0,1,.51-.26c.11,0,.19.1.21.3a.86.86,0,0,1-.21.64,22.49,22.49,0,0,0-1.78,2.89c-.85,1.53-1.75,3.22-2.68,5.06s-1.8,3.5-2.59,5a46,46,0,0,0-2,4.42,9.63,9.63,0,0,0-.85,3.06,1.05,1.05,0,0,0,1.19,1.19,5.15,5.15,0,0,0,2.84-1.36,30.81,30.81,0,0,0,3.53-3.27c1.19-1.28,2.24-2.45,3.15-3.53.28-.34.63-.75,1.06-1.23s.69-.78.81-.9a.88.88,0,0,1,.17.6,3,3,0,0,1-.43,1.15,9,9,0,0,1-.68,1c-1.19,1.48-2.49,3-3.91,4.55a21.53,21.53,0,0,1-4.67,3.91A10.34,10.34,0,0,1,125.71,52.27ZM140.5,19.55a1.9,1.9,0,0,1-1.7-.77,1.74,1.74,0,0,1-.34-1.1,2.57,2.57,0,0,1,1.28-2.21,3.6,3.6,0,0,1,1.7-.51,2,2,0,0,1,1.78.76,1.73,1.73,0,0,1,.34,1.11A2.53,2.53,0,0,1,142.2,19,3,3,0,0,1,140.5,19.55Z" transform="translate(-2.72 0.09)"/><path className="cls-1" d="M144,52.7c-2.33,0-3.94-.46-4.85-1.36A4.5,4.5,0,0,1,137.78,48a12.44,12.44,0,0,1,1.32-5.27A50.44,50.44,0,0,1,141.61,38a26.13,26.13,0,0,1,3.65-4.25,24.56,24.56,0,0,1,5-3.74,10.73,10.73,0,0,1,5.27-1.53,3.74,3.74,0,0,1,3.06,1.07,3.92,3.92,0,0,1,.85,2.5,6.13,6.13,0,0,1-1.58,4.34A12.2,12.2,0,0,1,154,39.14a38,38,0,0,1-4.42,1.74c-.85.23-1.85.46-3,.68a16.21,16.21,0,0,1-3.23.34,21.11,21.11,0,0,0-.93,3,11.37,11.37,0,0,0-.34,2.63,3.77,3.77,0,0,0,.72,2.38,2.86,2.86,0,0,0,2.42.94,9.7,9.7,0,0,0,1.62-.17,16.85,16.85,0,0,0,2-.51,17.39,17.39,0,0,0,5-2.72,39.17,39.17,0,0,0,4.55-4,45.05,45.05,0,0,0,3.19-3.61.81.81,0,0,1,.25.59,3.11,3.11,0,0,1-.59,1.36,34.31,34.31,0,0,1-4.42,4.93,27.63,27.63,0,0,1-6,4.3A14.61,14.61,0,0,1,144,52.7Zm.08-12.5a14.29,14.29,0,0,0,2.51,0,13.23,13.23,0,0,0,2.76-.55,9,9,0,0,0,5.06-3.27,7.3,7.3,0,0,0,1.57-4,3.17,3.17,0,0,0-.42-1.7,1.5,1.5,0,0,0-1.36-.68,6.28,6.28,0,0,0-4.42,1.83,19.62,19.62,0,0,0-3.4,4.2A41.81,41.81,0,0,0,144.07,40.2Z" transform="translate(-2.72 0.09)"/><path className="cls-1" d="M165.92,52.19c-1.7,0-2.87-.41-3.49-1.23a4.87,4.87,0,0,1-.93-3,14,14,0,0,1,1.06-5.1c.71-1.81,1.29-3.23,1.74-4.25l-2.12,2.29c-.68.74-1.17,1.28-1.45,1.62s-.31.34-.42.34-.17-.14-.17-.43a2.17,2.17,0,0,1,.42-1.27c.79-1,1.7-2.1,2.72-3.23s2-2.32,3-3.57Q168,31.19,170,27t4.33-8.67q2.25-4.47,4.42-8.25A65.5,65.5,0,0,1,182.66,4a13.39,13.39,0,0,0,2.76-1.53q1.32-.93,2.64-1.74a5.2,5.2,0,0,1,2.76-.81,1.81,1.81,0,0,1,1.4.51,2.71,2.71,0,0,1,.64,1.19,3.3,3.3,0,0,1,.09.94,11.66,11.66,0,0,1-1.32,4.76,45.59,45.59,0,0,1-3.06,5.48q-1.74,2.69-3,4.38a89.92,89.92,0,0,1-7,8.63q-3.57,3.87-6.42,6.46T168,36c-.4.74-.86,1.71-1.4,2.93a31.06,31.06,0,0,0-1.4,3.83,12.88,12.88,0,0,0-.6,3.69,4.17,4.17,0,0,0,.68,2.43,2.6,2.6,0,0,0,2.3,1h.51a2.29,2.29,0,0,0,.59-.08,7.29,7.29,0,0,0,3.15-1.62,34.62,34.62,0,0,0,3.4-3.14q1.69-1.78,3.06-3.4c.39-.45.76-.89,1.1-1.32s.57-.72.68-.89c.4.4.38.89,0,1.49S179.29,42,179,42.41s-1,1.21-1.7,2.09-1.59,1.82-2.55,2.84a26.82,26.82,0,0,1-4,3.23A8.53,8.53,0,0,1,165.92,52.19Zm3.57-19.55q2.63-2.2,6.67-6.33a69.2,69.2,0,0,0,8-10c.28-.45.75-1.22,1.4-2.3s1.33-2.3,2-3.69a42.21,42.21,0,0,0,1.83-4.08,9.88,9.88,0,0,0,.76-3.45c0-.9-.25-1.36-.76-1.36s-1.45.54-2.47,1.62a34.76,34.76,0,0,0-4,5.48q-2.25,3.62-4.71,8t-4.72,8.67C171.94,28.08,170.62,30.54,169.49,32.64Z" transform="translate(-2.72 0.09)"/><path className="cls-1" d="M184.1,52.19q-2.55,0-3.48-1.23a4.87,4.87,0,0,1-.94-3,14,14,0,0,1,1.07-5.1c.71-1.81,1.29-3.23,1.74-4.25l-2.13,2.29q-1,1.11-1.44,1.62c-.17.23-.31.34-.43.34s-.17-.14-.17-.43a2.18,2.18,0,0,1,.43-1.27c.79-1,1.7-2.1,2.72-3.23s2-2.32,3-3.57q1.71-3.15,3.79-7.35t4.33-8.67q2.25-4.47,4.42-8.25A65.5,65.5,0,0,1,200.85,4a13.39,13.39,0,0,0,2.76-1.53q1.32-.93,2.64-1.74A5.2,5.2,0,0,1,209-.09a1.81,1.81,0,0,1,1.4.51,2.71,2.71,0,0,1,.64,1.19,3.4,3.4,0,0,1,.08.94,11.78,11.78,0,0,1-1.31,4.76,45.59,45.59,0,0,1-3.06,5.48c-1.17,1.79-2.17,3.25-3,4.38a89.92,89.92,0,0,1-7,8.63q-3.57,3.87-6.42,6.46T186.23,36c-.4.74-.87,1.71-1.4,2.93a32.81,32.81,0,0,0-1.41,3.83,13.2,13.2,0,0,0-.59,3.69,4.17,4.17,0,0,0,.68,2.43,2.59,2.59,0,0,0,2.29,1h.51a2.36,2.36,0,0,0,.6-.08,7.21,7.21,0,0,0,3.14-1.62,32.49,32.49,0,0,0,3.4-3.14q1.71-1.78,3.06-3.4.6-.67,1.11-1.32c.34-.42.57-.72.68-.89.4.4.38.89,0,1.49s-.78,1.09-1.07,1.48-1,1.21-1.7,2.09-1.58,1.82-2.55,2.84a26.2,26.2,0,0,1-4,3.23A8.53,8.53,0,0,1,184.1,52.19Zm3.57-19.55q2.64-2.2,6.68-6.33a68.5,68.5,0,0,0,7.94-10c.29-.45.75-1.22,1.41-2.3s1.33-2.3,2-3.69a44.63,44.63,0,0,0,1.82-4.08,9.92,9.92,0,0,0,.77-3.45c0-.9-.26-1.36-.77-1.36s-1.44.54-2.46,1.62a34.76,34.76,0,0,0-4,5.48q-2.25,3.62-4.72,8t-4.71,8.67C190.13,28.08,188.81,30.54,187.67,32.64Z" transform="translate(-2.72 0.09)"/><path className="cls-1" d="M201.53,52.7c-2.33,0-3.94-.46-4.85-1.36A4.54,4.54,0,0,1,195.32,48a12.44,12.44,0,0,1,1.32-5.27A50.44,50.44,0,0,1,199.15,38a26.13,26.13,0,0,1,3.65-4.25,24.56,24.56,0,0,1,5-3.74,10.73,10.73,0,0,1,5.27-1.53,3.74,3.74,0,0,1,3.06,1.07A3.92,3.92,0,0,1,217,32a6.17,6.17,0,0,1-1.57,4.34,12.24,12.24,0,0,1-3.87,2.76,38,38,0,0,1-4.42,1.74c-.85.23-1.84.46-3,.68a16.21,16.21,0,0,1-3.23.34,22.51,22.51,0,0,0-.93,3,11.37,11.37,0,0,0-.34,2.63,3.77,3.77,0,0,0,.72,2.38,2.86,2.86,0,0,0,2.42.94,9.6,9.6,0,0,0,1.62-.17,16.85,16.85,0,0,0,2-.51,17.39,17.39,0,0,0,5-2.72,38.36,38.36,0,0,0,4.55-4,45.05,45.05,0,0,0,3.19-3.61.81.81,0,0,1,.25.59,3.11,3.11,0,0,1-.59,1.36,34.31,34.31,0,0,1-4.42,4.93,27.63,27.63,0,0,1-6,4.3A14.61,14.61,0,0,1,201.53,52.7Zm.08-12.5a14.27,14.27,0,0,0,2.51,0,13,13,0,0,0,2.76-.55,9,9,0,0,0,5.06-3.27,7.3,7.3,0,0,0,1.57-4,3.17,3.17,0,0,0-.42-1.7,1.5,1.5,0,0,0-1.36-.68,6.28,6.28,0,0,0-4.42,1.83,19.62,19.62,0,0,0-3.4,4.2A41.81,41.81,0,0,0,201.61,40.2Z" transform="translate(-2.72 0.09)"/><path className="cls-1" d="M269.44,54a8.28,8.28,0,0,1-4.29-1.31,16.86,16.86,0,0,1-4.38-4.21,68.15,68.15,0,0,1-4.59-7.14c-1.24-2.27-2.25-4.25-3-6s-1.35-2.92-1.75-3.66a11.84,11.84,0,0,1,1.49-1.65,1.82,1.82,0,0,1,1.06-.56c2.66,0,5.06,0,7.18-.12a19.56,19.56,0,0,0,5.7-1,10.72,10.72,0,0,0,4.46-3.11A18,18,0,0,0,274.63,19a8.1,8.1,0,0,0,.55-2.08,18.58,18.58,0,0,0,.13-2.08,9,9,0,0,0-1.45-5.1,5.57,5.57,0,0,0-4.16-2.55,3.07,3.07,0,0,0-.77-.09h-.85a16.62,16.62,0,0,0-3.53.43,4.77,4.77,0,0,0-2.84,1.61,52.54,52.54,0,0,0-4.08,6.34c-1.31,2.35-2.55,4.73-3.74,7.14s-2.33,4.66-3.4,6.75c-.29.57-.82,1.58-1.62,3s-1.67,3.09-2.63,4.93-1.87,3.67-2.72,5.48a48.17,48.17,0,0,0-2,4.85c-.48,1.42-.61,2.38-.38,2.89a.37.37,0,0,1,.08.25c0,.17-.08.26-.25.26a2.94,2.94,0,0,1-1.36-.34,3.55,3.55,0,0,0-1.62-.34,3.81,3.81,0,0,0-1.7.42A13.16,13.16,0,0,0,234.08,52,13.07,13.07,0,0,1,231,53.55a1.13,1.13,0,0,1-.51.08,1.4,1.4,0,0,1-.93-.29c-.23-.2-.23-.36,0-.47a7.45,7.45,0,0,0,3.23-1.4A8.3,8.3,0,0,0,235,48.79q1.78-3,3.52-6t3.36-6.08q2-3.73,4-7.52T250,21.67q2-3.48,3.48-6.71t2.3-4.68a5.41,5.41,0,0,1,2.08-2,16,16,0,0,1,2.93-1.41c-.34,0-.68,0-1,0s-.71,0-1.1,0q-2.64,0-5.74.3a57.53,57.53,0,0,0-6,.89,23.66,23.66,0,0,0-5.15,1.61,6.09,6.09,0,0,0-3,2.47,16.13,16.13,0,0,0-.6,1.53,4.81,4.81,0,0,0-.25,1.53,3,3,0,0,0,1.36,2.8s.08.06.08.17-.1.23-.3.34a.47.47,0,0,1-.46.09,5.78,5.78,0,0,1-1.92-2.08,12.54,12.54,0,0,1-1.4-2.77,7.72,7.72,0,0,1-.25-1.87,4.28,4.28,0,0,1,1.44-3.44,8.83,8.83,0,0,1,3.66-1.78,23.56,23.56,0,0,1,4.55-.68c1.55-.09,2.93-.13,4.12-.13q2.72,0,6.46,0c2.49,0,4.79,0,6.88,0,.51,0,1.08,0,1.7,0s1.28,0,2,0a46.34,46.34,0,0,1,4.76.25A15.8,15.8,0,0,1,275.05,7,6.59,6.59,0,0,1,278.2,9.6,10.31,10.31,0,0,1,279.64,15a12.29,12.29,0,0,1-2.46,7.82A21.93,21.93,0,0,1,275.31,25a17,17,0,0,1-2.38,2,21.94,21.94,0,0,1-5.27,2.6,36.17,36.17,0,0,1-6.33,1.57c-2.19.34-4.18.57-6,.68q1.11,2.39,3.36,6.37a57.82,57.82,0,0,0,5.48,8,10.3,10.3,0,0,0,3.49,3,8,8,0,0,0,3.48.85,9.11,9.11,0,0,0,5.15-1.62,24.37,24.37,0,0,0,4.42-3.78,44.45,44.45,0,0,0,3.18-3.78c.17-.28.31-.43.43-.43s.25.17.25.51a2.24,2.24,0,0,1-.51,1.36,54.76,54.76,0,0,1-7.48,8.55Q273,54,269.44,54Z" transform="translate(-2.72 0.09)"/><path className="cls-1" d="M286.27,52.27a2.59,2.59,0,0,1-1.4-.34,1.36,1.36,0,0,1-.55-1.27,8,8,0,0,1,.63-2.81c.43-1.07.91-2.15,1.45-3.23s1-1.95,1.23-2.63.89-1.83,1.49-3.1l1.7-3.66c.54-1.16.92-2,1.15-2.42q-1.2,1.27-2.85,3.19T286,39.69c-1,1.19-1.7,2.13-2.21,2.81-.17.23-.32.34-.43.34s-.17-.14-.17-.43a2.11,2.11,0,0,1,.43-1.27l3.61-4.59q2-2.55,3.61-4.72t2-2.85l2.76-.51a5.37,5.37,0,0,0,2.51-.93.74.74,0,0,1,.51-.26q.17,0,.21.3a.86.86,0,0,1-.21.64,22.49,22.49,0,0,0-1.78,2.89c-.85,1.53-1.75,3.22-2.68,5.06s-1.8,3.5-2.59,5a46,46,0,0,0-2,4.42,9.63,9.63,0,0,0-.85,3.06,1.05,1.05,0,0,0,1.19,1.19,5.15,5.15,0,0,0,2.84-1.36,31.66,31.66,0,0,0,3.53-3.27c1.19-1.28,2.24-2.45,3.15-3.53.28-.34.63-.75,1.06-1.23s.69-.78.81-.9a.88.88,0,0,1,.17.6,3,3,0,0,1-.43,1.15,9,9,0,0,1-.68,1c-1.19,1.48-2.49,3-3.91,4.55a21.77,21.77,0,0,1-4.67,3.91A10.34,10.34,0,0,1,286.27,52.27Zm14.79-32.72a1.9,1.9,0,0,1-1.7-.77,1.68,1.68,0,0,1-.34-1.1,2.57,2.57,0,0,1,1.28-2.21A3.6,3.6,0,0,1,302,15a2,2,0,0,1,1.78.76,1.73,1.73,0,0,1,.34,1.11A2.53,2.53,0,0,1,302.76,19,3,3,0,0,1,301.06,19.55Z" transform="translate(-2.72 0.09)"/><path className="cls-1" d="M303.27,52.7c-2.1,0-3.57-.4-4.42-1.19a4,4,0,0,1-1.28-3.06A11.78,11.78,0,0,1,299.19,43a49.62,49.62,0,0,1,3.06-5.06,28.32,28.32,0,0,1,3.27-3.7,22.85,22.85,0,0,1,4-3,27.18,27.18,0,0,1,3.7-1.82,10.72,10.72,0,0,1,4-1,3.44,3.44,0,0,1,2.71.89,3.24,3.24,0,0,1,.77,2.17,6.7,6.7,0,0,1-.34,2.08,17.34,17.34,0,0,1-.77,2,1.44,1.44,0,0,1-.76.72c-.34.14-.51.1-.51-.13a3.55,3.55,0,0,1,.08-.76,3,3,0,0,0,.09-.77,7.58,7.58,0,0,0-.72-3.18,2.33,2.33,0,0,0-2.17-1.58,6.58,6.58,0,0,0-3.32,1.07,10.89,10.89,0,0,0-2.46,1.82,32.81,32.81,0,0,0-4.29,5.7,28.27,28.27,0,0,0-3,6.46,9.87,9.87,0,0,0-.6,3.06,2.45,2.45,0,0,0,.77,2,2.92,2.92,0,0,0,1.87.59,7.29,7.29,0,0,0,1.83-.25c.65-.17,1.34-.37,2.08-.6a19.63,19.63,0,0,0,5.14-2.67,38.15,38.15,0,0,0,4.72-3.91,29.72,29.72,0,0,0,3.23-3.62.73.73,0,0,1,.17.51,1.89,1.89,0,0,1-.34,1c-.23.37-.4.67-.51.89a31.83,31.83,0,0,1-4.68,4.89A30.53,30.53,0,0,1,309.86,51,14.58,14.58,0,0,1,303.27,52.7Z" transform="translate(-2.72 0.09)"/><path className="cls-1" d="M323.5,52.7c-2.1,0-3.57-.4-4.42-1.19a4,4,0,0,1-1.28-3.06A11.78,11.78,0,0,1,319.42,43a47.87,47.87,0,0,1,3.06-5.06,28.32,28.32,0,0,1,3.27-3.7,22.85,22.85,0,0,1,3.95-3,27.18,27.18,0,0,1,3.7-1.82,10.72,10.72,0,0,1,4-1,3.45,3.45,0,0,1,2.72.89,3.24,3.24,0,0,1,.77,2.17,7,7,0,0,1-.34,2.08,17.34,17.34,0,0,1-.77,2,1.44,1.44,0,0,1-.76.72c-.34.14-.51.1-.51-.13a3.55,3.55,0,0,1,.08-.76,3,3,0,0,0,.09-.77,7.58,7.58,0,0,0-.72-3.18,2.34,2.34,0,0,0-2.17-1.58,6.58,6.58,0,0,0-3.32,1.07A10.89,10.89,0,0,0,330,32.72a32.32,32.32,0,0,0-4.29,5.7,28.27,28.27,0,0,0-3,6.46,9.87,9.87,0,0,0-.6,3.06,2.45,2.45,0,0,0,.77,2,2.92,2.92,0,0,0,1.87.59,7.35,7.35,0,0,0,1.83-.25c.65-.17,1.34-.37,2.08-.6a19.63,19.63,0,0,0,5.14-2.67,38.15,38.15,0,0,0,4.72-3.91,29.72,29.72,0,0,0,3.23-3.62.73.73,0,0,1,.17.51,1.89,1.89,0,0,1-.34,1c-.23.37-.4.67-.51.89a31.83,31.83,0,0,1-4.68,4.89A30.53,30.53,0,0,1,330.09,51,14.58,14.58,0,0,1,323.5,52.7Z" transform="translate(-2.72 0.09)"/><path className="cls-1" d="M343.05,52.27a2.57,2.57,0,0,1-1.4-.34,1.36,1.36,0,0,1-.56-1.27,8,8,0,0,1,.64-2.81c.43-1.07.91-2.15,1.45-3.23s.94-1.95,1.23-2.63.89-1.83,1.49-3.1l1.7-3.66c.53-1.16.92-2,1.14-2.42q-1.19,1.27-2.84,3.19c-1.11,1.27-2.14,2.5-3.11,3.69s-1.7,2.13-2.21,2.81c-.17.23-.31.34-.42.34s-.17-.14-.17-.43a2.17,2.17,0,0,1,.42-1.27L344,36.55q2-2.55,3.61-4.72t2-2.85l2.76-.51a5.42,5.42,0,0,0,2.51-.93.74.74,0,0,1,.51-.26q.17,0,.21.3a.86.86,0,0,1-.21.64,22.14,22.14,0,0,0-1.79,2.89q-1.28,2.3-2.67,5.06c-.94,1.84-1.8,3.5-2.6,5s-1.47,3-2,4.42a9.91,9.91,0,0,0-.85,3.06,1.05,1.05,0,0,0,1.19,1.19,5.14,5.14,0,0,0,2.85-1.36,31.66,31.66,0,0,0,3.53-3.27c1.19-1.28,2.24-2.45,3.14-3.53.29-.34.64-.75,1.07-1.23l.8-.9a.83.83,0,0,1,.17.6,3,3,0,0,1-.42,1.15,10.74,10.74,0,0,1-.68,1c-1.19,1.48-2.5,3-3.91,4.55a21.82,21.82,0,0,1-4.68,3.91A10.31,10.31,0,0,1,343.05,52.27Zm14.79-32.72a1.89,1.89,0,0,1-1.7-.77,1.68,1.68,0,0,1-.34-1.1,2.56,2.56,0,0,1,1.27-2.21,3.63,3.63,0,0,1,1.7-.51,2,2,0,0,1,1.79.76,1.79,1.79,0,0,1,.34,1.11A2.55,2.55,0,0,1,359.54,19,3,3,0,0,1,357.84,19.55Z" transform="translate(-2.72 0.09)"/><path className="cls-1" d="M368,52.27a2.85,2.85,0,0,1-1.45-.34,1.32,1.32,0,0,1-.59-1.27,7.56,7.56,0,0,1,.59-2.72,32.49,32.49,0,0,1,1.36-3c.51-1,1-1.8,1.36-2.42q-3,3.15-6.2,6A28.48,28.48,0,0,1,359.54,51a8,8,0,0,1-4.17,1.19,1.28,1.28,0,0,1-1.19-.55,2.54,2.54,0,0,1-.34-1.32,1.44,1.44,0,0,1,.09-.6,22.77,22.77,0,0,1,2.12-6.88,35.48,35.48,0,0,1,4.17-6.72,28.93,28.93,0,0,1,5-5.1,10.28,10.28,0,0,1,6.38-2.21h9.77c.29,0,.43.12.43.34,0,.46-.26.68-.77.68a2.31,2.31,0,0,0-1.7,1.07,18.79,18.79,0,0,0-1.27,1.74c-.4.62-1,1.67-1.87,3.14s-1.72,3.08-2.6,4.81-1.63,3.33-2.25,4.8a9.63,9.63,0,0,0-.93,3.23,1.05,1.05,0,0,0,1.19,1.19,5.11,5.11,0,0,0,2.89-1.19,25.81,25.81,0,0,0,3.27-2.93c1.1-1.16,2.12-2.33,3.06-3.49s1.68-2.08,2.25-2.76c.34.34.33.81,0,1.4a12.76,12.76,0,0,1-1,1.4,56.21,56.21,0,0,1-3.91,4.55,22.93,22.93,0,0,1-4.8,3.91A10.11,10.11,0,0,1,368,52.27Zm-9.18-3a5.31,5.31,0,0,0,2.84-1.49,42.21,42.21,0,0,0,4-3.74,53.74,53.74,0,0,0,4-4.76,51.05,51.05,0,0,0,3.1-4.59A7.08,7.08,0,0,0,374,31.53a1.37,1.37,0,0,0-.56-1.27,2.57,2.57,0,0,0-1.4-.34,5.66,5.66,0,0,0-2.93,1,14,14,0,0,0-2.51,1.91,18.25,18.25,0,0,0-2.42,2.93q-1.41,2-2.76,4.38a42.74,42.74,0,0,0-2.3,4.59,9.78,9.78,0,0,0-.93,3.57C358.18,49,358.4,49.3,358.86,49.3Z" transform="translate(-2.72 0.09)"/><path className="cls-1" d="M382,53.21c-.23,0-.23-.23,0-.68a15.9,15.9,0,0,0,.8-1.7q.39-.93.81-2,.86-2,1.87-4.59t2-5q.93-2.43,1.65-4.17c.48-1.16.81-1.91,1-2.25q-1.19,1.27-2.85,3.19c-1.1,1.27-2.14,2.5-3.1,3.69s-1.7,2.13-2.21,2.81c-.17.23-.31.34-.42.34s-.17-.14-.17-.43a2.17,2.17,0,0,1,.42-1.27q1.62-2,3.61-4.59T389,31.83q1.6-2.16,2-2.85l2.76-.51a5.42,5.42,0,0,0,2.51-.93.74.74,0,0,1,.51-.26q.17,0,.21.3a.86.86,0,0,1-.21.64,12.17,12.17,0,0,0-1.49,2.21c-.65,1.13-1.38,2.44-2.17,3.91l-2.29,4.25c.56-.85,1.31-1.86,2.25-3a38.91,38.91,0,0,1,3.1-3.4,21.67,21.67,0,0,1,3.44-2.76,6.18,6.18,0,0,1,3.28-1.11,3.55,3.55,0,0,1,1.87.47A3.09,3.09,0,0,1,406,30.43a3.44,3.44,0,0,1,.25,1.36,5.69,5.69,0,0,1-.72,2.76c-.48.88-.84,1.55-1.06,2-.06.17-.26.33-.6.47s-.48.1-.42-.13.09-.57.12-.85a8.9,8.9,0,0,0,.05-.94,6.14,6.14,0,0,0-.56-2.63,2,2,0,0,0-2-1.19A5.6,5.6,0,0,0,397.7,33a42.39,42.39,0,0,0-3.91,3.91,34.49,34.49,0,0,0-3.91,5.48,38.71,38.71,0,0,0-2.38,5.06c-.34.91-.68,1.8-1,2.68s-.59,1.57-.76,2.08a6.83,6.83,0,0,0-2.21.55A5,5,0,0,1,382,53.21Z" transform="translate(-2.72 0.09)"/><path className="cls-1" d="M416.15,52.27a2.85,2.85,0,0,1-1.45-.34,1.32,1.32,0,0,1-.59-1.27,7.56,7.56,0,0,1,.59-2.72,32.49,32.49,0,0,1,1.36-3c.51-1,1-1.8,1.36-2.42a84.9,84.9,0,0,1-6.21,6A27.65,27.65,0,0,1,407.65,51a8,8,0,0,1-4.17,1.19,1.28,1.28,0,0,1-1.19-.55,2.45,2.45,0,0,1-.34-1.32,1.44,1.44,0,0,1,.09-.6,22.77,22.77,0,0,1,2.12-6.88,35.48,35.48,0,0,1,4.17-6.72,28.93,28.93,0,0,1,5-5.1,9.83,9.83,0,0,1,3.74-1.82,18.31,18.31,0,0,1,3.91-.39h2.8q1.36-2.29,2.85-5.14c1-1.9,2-3.78,3-5.65s1.91-3.51,2.76-4.93a36.51,36.51,0,0,1,7.69-9.52A14.17,14.17,0,0,1,449.46,0a3.5,3.5,0,0,1,2,.64,2,2,0,0,1,.86,1.91l-.17,3.06c0,.06-.06.13-.17.21a.51.51,0,0,1-.26.13c-.06,0-.14-.06-.26-.17A3.28,3.28,0,0,0,450,3.44a5.76,5.76,0,0,0-3.15-.81,10.71,10.71,0,0,0-1.32.09,6.09,6.09,0,0,0-1.4.34,10.51,10.51,0,0,0-4.5,3.44A52.18,52.18,0,0,0,435,13.34q-.86,1.62-2.21,4.21T430,23.12q-1.48,3-2.81,5.78t-2.25,4.76c-.28.68-.76,1.71-1.44,3.1s-1.41,2.89-2.17,4.51-1.42,3.1-2,4.46a9.25,9.25,0,0,0-.8,2.89c0,.79.34,1.19,1,1.19a5.24,5.24,0,0,0,2.73-1.23,29.82,29.82,0,0,0,3.52-3.06q1.83-1.83,3.32-3.53c1-1.13,1.68-2,2.08-2.55a.82.82,0,0,1,.26.59,1.92,1.92,0,0,1-.47,1.19l-.81,1a47.81,47.81,0,0,1-3.78,4.38,26,26,0,0,1-4.89,4A10,10,0,0,1,416.15,52.27Zm-9.19-3a5.33,5.33,0,0,0,2.85-1.49,42.21,42.21,0,0,0,4-3.74,55.51,55.51,0,0,0,4-4.76,51.05,51.05,0,0,0,3.1-4.59,7.2,7.2,0,0,0,1.24-3.19,1.37,1.37,0,0,0-.56-1.27,2.59,2.59,0,0,0-1.4-.34,5.63,5.63,0,0,0-2.93,1,14,14,0,0,0-2.51,1.91,18.25,18.25,0,0,0-2.42,2.93q-1.41,2-2.76,4.38a42.74,42.74,0,0,0-2.3,4.59,9.78,9.78,0,0,0-.93,3.57C406.29,49,406.51,49.3,407,49.3Z" transform="translate(-2.72 0.09)"/><path className="cls-1" d="M432.46,52.27a2.62,2.62,0,0,1-1.4-.34,1.36,1.36,0,0,1-.55-1.27,7.79,7.79,0,0,1,.64-2.81c.42-1.07.9-2.15,1.44-3.23s1-1.95,1.23-2.63.9-1.83,1.49-3.1,1.16-2.5,1.7-3.66.92-2,1.15-2.42Q437,34.08,435.31,36c-1.1,1.27-2.14,2.5-3.1,3.69s-1.7,2.13-2.21,2.81c-.17.23-.31.34-.43.34s-.17-.14-.17-.43a2.11,2.11,0,0,1,.43-1.27q1.62-2,3.61-4.59c1.33-1.7,2.54-3.27,3.61-4.72s1.76-2.39,2-2.85l2.77-.51a5.33,5.33,0,0,0,2.5-.93.74.74,0,0,1,.52-.26q.17,0,.21.3a.91.91,0,0,1-.21.64,21.05,21.05,0,0,0-1.79,2.89q-1.27,2.3-2.68,5.06c-.93,1.84-1.8,3.5-2.59,5s-1.47,3-2,4.42a9.63,9.63,0,0,0-.85,3.06,1.05,1.05,0,0,0,1.19,1.19A5.17,5.17,0,0,0,439,48.45a31.61,31.61,0,0,0,3.52-3.27c1.19-1.28,2.24-2.45,3.15-3.53.28-.34.64-.75,1.06-1.23l.81-.9a.88.88,0,0,1,.17.6,3,3,0,0,1-.43,1.15,7.81,7.81,0,0,1-.68,1c-1.19,1.48-2.49,3-3.9,4.55A21.82,21.82,0,0,1,438,50.7,10.32,10.32,0,0,1,432.46,52.27Zm14.79-32.72a1.9,1.9,0,0,1-1.7-.77,1.74,1.74,0,0,1-.34-1.1,2.57,2.57,0,0,1,1.28-2.21,3.6,3.6,0,0,1,1.7-.51,2,2,0,0,1,1.78.76,1.73,1.73,0,0,1,.34,1.11A2.53,2.53,0,0,1,449,19,3,3,0,0,1,447.25,19.55Z" transform="translate(-2.72 0.09)"
              />
            </svg>
            <h2 className='Home__slogan'>The Golden Dawn In Each Glass</h2>
            <Link className='Home__button' to='/visit'>Book a tour</Link>
        </div>
    </div>
  );
};

export default Home;