const students = [
  { nome: "Eduardo", nota1: 6, nota2: 8 },
  { nome: "Jair", nota1: 4, nota2: 8 },
  { nome: "Karen", nota1: 6, nota2: 8 },
];

console.log(students);

function getAverage(student) {
  return (student.nota1 + student.nota2) / 2;
}

for (let student of students) {
  const average = getAverage(student);
  alert(`
  A média do(a) aluno(a) ${student.nome} é: ${average}
  ${
    average >= 7
      ? `Parabéns ${student.nome}! Você foi aprovado(a) no concurso!`
      : `Não foi dessa vez ${student.nome}, você foi reprovado(a) no concurso.`
  }
  `);
}
