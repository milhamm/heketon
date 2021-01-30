export const initialName = (name) => {
  const stringifyName = `${name}`;
  const [firstName, secondName] = stringifyName.split(' ');

  const firstNameInitial = firstName.substring(0, 1);
  let secondNameInitial;

  if (!!secondName) {
    secondNameInitial = secondName.substring(0, 1);
  }

  return !!secondName
    ? `${firstNameInitial}${secondNameInitial}`
    : `${firstNameInitial}`;
};
