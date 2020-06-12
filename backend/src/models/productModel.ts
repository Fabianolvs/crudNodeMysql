import sql from '../db/db';
import {Produto} from '../types/produto';

class Model {
  getAllProd(result: Function) {
    sql.query('SELECT * FROM produto', (err, res) => {
      if (err) {
        throw err;
      } else {
        result(null, res);
      }
    });
  }

  createProd(newProd: Produto, result: Function) {
    sql.query('INSERT INTO produto SET ?', newProd, (err, res) => {
      if (err) {
        throw err;
      } else {
        result(null, res.insertId);
      }
    });
  }

  updateProd(id: number, produto: Produto, result: Function) {
    sql.query(
      'UPDATE produto SET ? WHERE id = ?',
      [produto, id],
      (err, res) => {
        if (err) {
          throw err;
        } else {
          result(null, res.insertId);
        }
      },
    );
  }

  deleteProd(id: number, result: Function) {
    sql.query('DELETE FROM produto WHERE id = ?', [id], (err, res) => {
      if (err) {
        throw err;
      } else {
        result(null, res);
      }
    });
  }
}

export default Model;
