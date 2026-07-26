export function setupCounter(element: HTMLButtonElement) {
  let counter = {
    'Dipper': 0,
    'Stan': 0,
    'Mabel': 0,
    'Soos': 0,
    'Wendy': 0, 
    'Bill Cipher': 0,
    'Gideon': 0,
    'Robbie': 0,
    'Pacifica': 0,
  };
  const setCounter = () => {
    counter['Dipper'] += 1;
    counter['Wendy'] += 2;
    counter['Robbie'] += 5;
    counter['Gideon'] -= 2;
    document.querySelector<HTMLDivElement>('.debug')!.innerHTML = `
    <p>Dipper = ${counter['Dipper']}<p>
    <p>Stan = ${counter['Stan']}<p>
    <p>Mabel = ${counter['Mabel']}<p>
    <p>Soos = ${counter['Soos']}<p>
    <p>Wendy = ${counter['Wendy']}<p>
    <p>Bill Cipher = ${counter['Bill Cipher']}<p>
    <p>Gideon = ${counter['Gideon']}<p>
    <p>Robbie = ${counter['Robbie']}<p>
    <p>Pacifica = ${counter['Pacifica']}<p>
    `
  }
  element.addEventListener('click', () => setCounter());
}
