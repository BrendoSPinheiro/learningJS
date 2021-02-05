function testarNome(name) {
  try {
    throw Error('teste erro');
  } catch (error) {
    return error.message;
  }
}

function testar(name) {
  try {
    throw Error('teste erro');
  } catch (error) {
    return error.message;
  }
}

console.log(testarNome('Brendo'));

