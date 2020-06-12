import express from 'express';
import {Produto} from '../types/produto';
import Model from '../models/productModel';

const model = new Model();

export class ProdController {
  async getAllProd(req: express.Request, res: express.Response) {
    req.body; // Typescript breaks when I declare req but dont uses.

    await model.getAllProd((err: Error, produto: Produto) => {
      if (err) {
        throw err;
      } else {
        res.send(produto);
      }
    });
  }

  async cadastro(req: express.Request, res: express.Response) {
    const {nome, descricao, preco}: Produto = req.body;

    const newProd: Produto = {
      nome,
      descricao,
      preco,
    };

    if (!newProd.nome || !newProd.preco) {
      res.status(400).send({Error: true, message: 'Nome ou Preço invalido'});
    } else {
      await model.createProd(newProd, (err: Error) => {
        if (err) {
          throw err;
        } else {
          res.json({error: false, message: 'Produto criado com sucesso'});
        }
      });
    }
  }

  async update(req: express.Request, res: express.Response) {
    const {id, nome, preco, descricao} = req.body;

    const updatedProd = {
      nome,
      preco,
      descricao,
    };

    await model.updateProd(id, updatedProd, (err: Error) => {
      if (err) {
        throw err;
      } else {
        res.json({error: false, message: 'Produto alterado com sucesso'});
      }
    });
  }

  async delete(req: express.Request, res: express.Response) {
    const {id} = req.body;
    await model.deleteProd(id, (err: Error) => {
      if (err) {
        throw err;
      } else {
        res.json({error: false, message: 'Produto deletado com sucesso'});
      }
    });
  }
}
