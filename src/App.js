import "./styles.css";

export default function App() {
  function determinant22(m) {
    return m.length == 1
      ? m[0][0]
      : m.length == 2
      ? m[0][0] * m[1][1] - m[0][1] * m[1][0]
      : m[0].reduce(
          (r, e, i) =>
            r +
            (-1) ** (i + 2) *
              e *
              determinant22(m.slice(1).map((c) => c.filter((_, j) => i != j))),
          0
        );
  }
  function determinant(m) {
    if (m.length == 0) return 0;
    if (m.length == 1) return m[0][0];
    if (m.length == 2) return m[0][0] * m[1][1] - m[0][1] * m[1][0];
    if (m.length > 2) {
      return m.reduce((prev, curr, i, arr) => {
        let miniArr = arr
          .slice(0, i)
          .concat(arr.slice(i + 1))
          .map((item) => item.slice(1));
        return prev + (i % 2 == 0 ? 1 : -1) * curr[0] * determinant(miniArr);
      }, 0);
    }
  }

  function determinant33(m) {
    if (m.length === 1) return m[0][0];
    if (m.length === 2) return m[0][0] * m[1][1] - m[0][1] * m[1][0];
    let sum = 0;
    for (let i = 0; i < m.length; i++) {
      let c = i % 2 === 0 ? 1 : -1;
      let _m = m.slice(1).map((row) => row.filter((n, _i) => _i !== i));
      sum += c * m[0][i] * determinant33(_m);
    }
    return sum;
  }

  const test1 = [[3]]; // 3
  const test2 = [
    [3, -2],
    [7, 4]
  ]; // 26
  const test3 = [
    [1, 3, 7],
    [2, -1, 4],
    [5, 0, 2]
  ]; // 81

  console.log(determinant22(test1));
  console.log(determinant22(test2));
  console.log(determinant22(test3));
  return (
    <div className="App">
      <input />
    </div>
  );
}
