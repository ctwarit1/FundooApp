import { expect } from 'chai';
import request from 'supertest';
import mongoose from 'mongoose';

import app from '../../src/index';


describe('------Testing For User API-----', () => {
  before((done) => {
    const clearCollections = () => {
      for (const collection in mongoose.connection.collections) {
        mongoose.connection.collections[collection].deleteOne(() => { });
      }
    };

    const mongooseConnect = async () => {
      await mongoose.connect(process.env.DATABASE_TEST);
      clearCollections();
    };

    if (mongoose.connection.readyState === 0) {
      mongooseConnect();
    } else {
      clearCollections();
    }

    done();
  });

  describe('User Registration ', () => {

    it('Valid User Details Are Given ', (done) => {
      const inputBody = {
        "fName": "Twarit",
        "lName": "Chokniwal",
        "email": "ctwarit@gmail.com",
        "password": "twarit@123"
      }
      request(app)
        .post('/api/v1/users/register')
        .send(inputBody)
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(200);
          done();
        });
    });


    it('InvalidFirstnameIsGivenItShouldThrowAnError', (done) => {
      const inputBody = {
        "fName": "twa",
        "lName": "Chokniwal",
        "email": "ctwarit@gmail.com",
        "password": "twarit@123"
      }
      request(app)
        .post('/api/v1/users/register')
        .send(inputBody)
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(500);
          done();
        });
    });


    it('InvalidLastnameIsGivenItShouldThrowAnError', (done) => {
      const inputBody = {
        "fName": "Twarit",
        "lName": "Chok",
        "email": "ctwarit@gmail.com",
        "password": "twarit@123"
      }
      request(app)
        .post('/api/v1/users/register')
        .send(inputBody)
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(500);
          done();
        });
    });

  });
})