import Router from '../../src/router';
import WebReader from '../../src/main';
import WebReaderError from '../../src/webreader-error';

describe('Router', function() {
   describe('route()', function() {
      /* jshint -W071 */
      const webReader = new WebReader();

      it('should recognize the "read all headers" command (happy path)', function() {
         let stub = sinon
            .stub(webReader, 'readHeaders')
            .returns(Promise.resolve());
         let promise = Router.route(webReader, {
            command: 'READ_ALL_HEADERS'
         });

         return Promise.all([
            assert.instanceOf(promise, Promise, 'The returned value is a promise'),
            assert.isFulfilled(promise, 'The promise is fulfilled'),
            promise.then(() => {
               assert.isTrue(stub.calledOnce, 'The method is only called once');
               assert.isTrue(stub.calledWithExactly(), 'The method is called with the expected arguments');

               stub.restore();
            })
         ]);
      });

      it('should recognize the "read all headers" command (sad path)', function() {
         let stub = sinon
            .stub(webReader, 'readHeaders')
            .returns(
               Promise.reject(new WebReaderError())
            );
         let promise = Router.route(webReader, {
            command: 'READ_ALL_HEADERS'
         });

         return Promise.all([
            assert.instanceOf(promise, Promise, 'The returned value is a promise'),
            assert.isRejected(promise, WebReaderError, 'The promise is rejected'),
            promise.catch(() => {
               assert.isTrue(stub.calledOnce, 'The method is only called once');
               assert.isTrue(stub.calledWithExactly(), 'The method is called with the expected arguments');

               stub.restore();
            })
         ]);
      });

      it('should recognize the "read all links" command (happy path)', function() {
         let stub = sinon
            .stub(webReader, 'readLinks')
            .returns(Promise.resolve());
         let promise = Router.route(webReader, {
            command: 'READ_ALL_LINKS'
         });

         return Promise.all([
            assert.instanceOf(promise, Promise, 'The returned value is a promise'),
            assert.isFulfilled(promise, 'The promise is fulfilled'),
            promise.then(() => {
               assert.isTrue(stub.calledOnce, 'The method is only called once');
               assert.isTrue(stub.calledWithExactly(), 'The method is called with the expected arguments');

               stub.restore();
            })
         ]);
      });

      it('should recognize the "read all links" command (sad path)', function() {
         let stub = sinon
            .stub(webReader, 'readLinks')
            .returns(
               Promise.reject(new WebReaderError())
            );
         let promise = Router.route(webReader, {
            command: 'READ_ALL_LINKS'
         });

         return Promise.all([
            assert.instanceOf(promise, Promise, 'The returned value is a promise'),
            assert.isRejected(promise, WebReaderError, 'The promise is rejected'),
            promise.catch(() => {
               assert.isTrue(stub.calledOnce, 'The method is only called once');
               assert.isTrue(stub.calledWithExactly(), 'The method is called with the expected arguments');

               stub.restore();
            })
         ]);
      });

      it('should recognize the "read headers of level" command (happy path)', function() {
         let level = 2;
         let stub = sinon
            .stub(webReader, 'readHeaders')
            .returns(Promise.resolve());
         let promise = Router.route(webReader, {
            command: 'READ_LEVEL_HEADERS',
            level: level
         });

         return Promise.all([
            assert.instanceOf(promise, Promise, 'The returned value is a promise'),
            assert.isFulfilled(promise, 'The promise is fulfilled'),
            promise.then(() => {
               assert.isTrue(stub.calledOnce, 'The method is only called once');
               assert.isTrue(stub.calledWithExactly({
                  level
               }), 'The method is called with the expected arguments');

               stub.restore();
            })
         ]);
      });

      it('should recognize the "read headers of level" command (sad path)', function() {
         let level = 2;
         let stub = sinon
            .stub(webReader, 'readHeaders')
            .returns(
               Promise.reject(new WebReaderError())
            );
         let promise = Router.route(webReader, {
            command: 'READ_LEVEL_HEADERS',
            level: level
         });

         return Promise.all([
            assert.instanceOf(promise, Promise, 'The returned value is a promise'),
            assert.isRejected(promise, WebReaderError, 'The promise is rejected'),
            promise.catch(() => {
               assert.isTrue(stub.calledOnce, 'The method is only called once');
               assert.isTrue(stub.calledWithExactly({
                  level
               }), 'The method is called with the expected arguments');

               stub.restore();
            })
         ]);
      });

      it('should recognize the "read main" command (happy path)', function() {
         let stub = sinon
            .stub(webReader, 'readMain')
            .returns(Promise.resolve());
         let promise = Router.route(webReader, {
            command: 'READ_MAIN'
         });

         return Promise.all([
            assert.instanceOf(promise, Promise, 'The returned value is a promise'),
            assert.isFulfilled(promise, 'The promise is fulfilled'),
            promise.then(() => {
               assert.isTrue(stub.calledOnce, 'The method is only called once');
               assert.isTrue(stub.calledWithExactly(), 'The method is called with the expected arguments');

               stub.restore();
            })
         ]);
      });

      it('should recognize the "read main" command (sad path)', function() {
         let stub = sinon
            .stub(webReader, 'readMain')
            .returns(
               Promise.reject(new WebReaderError())
            );
         let promise = Router.route(webReader, {
            command: 'READ_MAIN'
         });

         return Promise.all([
            assert.instanceOf(promise, Promise, 'The returned value is a promise'),
            assert.isRejected(promise, WebReaderError, 'The promise is rejected'),
            promise.catch(() => {
               assert.isTrue(stub.calledOnce, 'The method is only called once');
               assert.isTrue(stub.calledWithExactly(), 'The method is called with the expected arguments');

               stub.restore();
            })
         ]);
      });

      it('should recognize the "search main" command (happy path)', function() {
         let stub = sinon
            .stub(webReader, 'searchMain')
            .returns(Promise.resolve());
         let promise = Router.route(webReader, {
            command: 'SEARCH_MAIN'
         });

         return Promise.all([
            assert.instanceOf(promise, Promise, 'The returned value is a promise'),
            assert.isFulfilled(promise, 'The promise is fulfilled'),
            promise.then(() => {
               assert.isTrue(stub.calledOnce, 'The method is only called once');
               assert.isTrue(stub.calledWithExactly(), 'The method is called with the expected arguments');

               stub.restore();
            })
         ]);
      });

      it('should recognize the "search main" command (sad path)', function() {
         let stub = sinon
            .stub(webReader, 'searchMain')
            .throws(new WebReaderError());
         let promise = Router.route(webReader, {
            command: 'SEARCH_MAIN'
         });

         return Promise.all([
            assert.instanceOf(promise, Promise, 'The returned value is a promise'),
            assert.isRejected(promise, WebReaderError, 'The promise is rejected'),
            promise.catch(() => {
               assert.isTrue(stub.calledOnce, 'The method is only called once');
               assert.isTrue(stub.calledWithExactly(), 'The method is called with the expected arguments');

               stub.restore();
            })
         ]);
      });

      it('should recognize the "read again" command (happy path)', function() {
         let stub = sinon
            .stub(webReader, 'readCurrentElement')
            .returns(Promise.resolve());
         let promise = Router.route(webReader, {
            command: 'READ_AGAIN'
         });

         return Promise.all([
            assert.instanceOf(promise, Promise, 'The returned value is a promise'),
            assert.isFulfilled(promise, 'The promise is fulfilled'),
            promise.then(() => {
               assert.isTrue(stub.calledOnce, 'The method is only called once');
               assert.isTrue(stub.calledWithExactly(), 'The method is called with the expected arguments');

               stub.restore();
            })
         ]);
      });

      it('should recognize the "read again" command (sad path)', function() {
         let stub = sinon
            .stub(webReader, 'readCurrentElement')
            .returns(
               Promise.reject(new WebReaderError())
            );
         let promise = Router.route(webReader, {
            command: 'READ_AGAIN'
         });

         return Promise.all([
            assert.instanceOf(promise, Promise, 'The returned value is a promise'),
            assert.isRejected(promise, WebReaderError, 'The promise is rejected'),
            promise.catch(() => {
               assert.isTrue(stub.calledOnce, 'The method is only called once');
               assert.isTrue(stub.calledWithExactly(), 'The method is called with the expected arguments');

               stub.restore();
            })
         ]);
      });

      it('should recognize the "read previous" command (happy path)', function() {
         let stub = sinon
            .stub(webReader, 'readPreviousElement')
            .returns(Promise.resolve());
         let promise = Router.route(webReader, {
            command: 'READ_PREVIOUS'
         });

         return Promise.all([
            assert.instanceOf(promise, Promise, 'The returned value is a promise'),
            assert.isFulfilled(promise, 'The promise is fulfilled'),
            promise.then(() => {
               assert.isTrue(stub.calledOnce, 'The method is only called once');
               assert.isTrue(stub.calledWithExactly(), 'The method is called with the expected arguments');

               stub.restore();
            })
         ]);
      });

      it('should recognize the "read previous" command (sad path)', function() {
         let stub = sinon
            .stub(webReader, 'readPreviousElement')
            .returns(
               Promise.reject(new WebReaderError())
            );
         let promise = Router.route(webReader, {
            command: 'READ_PREVIOUS'
         });

         return Promise.all([
            assert.instanceOf(promise, Promise, 'The returned value is a promise'),
            assert.isRejected(promise, WebReaderError, 'The promise is rejected'),
            promise.catch(() => {
               assert.isTrue(stub.calledOnce, 'The method is only called once');
               assert.isTrue(stub.calledWithExactly(), 'The method is called with the expected arguments');

               stub.restore();
            })
         ]);
      });

      it('should recognize the "read next" command (happy path)', function() {
         let stub = sinon
            .stub(webReader, 'readNextElement')
            .returns(Promise.resolve());
         let promise = Router.route(webReader, {
            command: 'READ_NEXT'
         });

         return Promise.all([
            assert.instanceOf(promise, Promise, 'The returned value is a promise'),
            assert.isFulfilled(promise, 'The promise is fulfilled'),
            promise.then(() => {
               assert.isTrue(stub.calledOnce, 'The method is only called once');
               assert.isTrue(stub.calledWithExactly(), 'The method is called with the expected arguments');

               stub.restore();
            })
         ]);
      });

      it('should recognize the "read next" command (sad path)', function() {
         let stub = sinon
            .stub(webReader, 'readNextElement')
            .returns(
               Promise.reject(new WebReaderError())
            );
         let promise = Router.route(webReader, {
            command: 'READ_NEXT'
         });

         return Promise.all([
            assert.instanceOf(promise, Promise, 'The returned value is a promise'),
            assert.isRejected(promise, WebReaderError, 'The promise is rejected'),
            promise.catch(() => {
               assert.isTrue(stub.calledOnce, 'The method is only called once');
               assert.isTrue(stub.calledWithExactly(), 'The method is called with the expected arguments');

               stub.restore();
            })
         ]);
      });

      it('should recognize the "read page title" command (happy path)', function() {
         let stub = sinon
            .stub(webReader, 'readPageTitle')
            .returns(Promise.resolve());
         let promise = Router.route(webReader, {
            command: 'READ_PAGE_TITLE'
         });

         return Promise.all([
            assert.instanceOf(promise, Promise, 'The returned value is a promise'),
            assert.isFulfilled(promise, 'The promise is fulfilled'),
            promise.then(() => {
               assert.isTrue(stub.calledOnce, 'The method is only called once');
               assert.isTrue(stub.calledWithExactly(), 'The method is called with the expected arguments');

               stub.restore();
            })
         ]);
      });

      it('should recognize the "read page title" command (sad path)', function() {
         let stub = sinon
            .stub(webReader, 'readPageTitle')
            .returns(
               Promise.reject(new WebReaderError())
            );
         let promise = Router.route(webReader, {
            command: 'READ_PAGE_TITLE'
         });

         return Promise.all([
            assert.instanceOf(promise, Promise, 'The returned value is a promise'),
            assert.isRejected(promise, WebReaderError, 'The promise is rejected'),
            promise.catch(() => {
               assert.isTrue(stub.calledOnce, 'The method is only called once');
               assert.isTrue(stub.calledWithExactly(), 'The method is called with the expected arguments');

               stub.restore();
            })
         ]);
      });

      it('should recognize the "read links in element" command (happy path)', function() {
         let ancestor = document.createElement('header');
         let stub = sinon
            .stub(webReader, 'readLinks')
            .returns(Promise.resolve());
         let promise = Router.route(webReader, {
            command: 'READ_LINKS_IN_ELEMENT',
            element: ancestor
         });

         return Promise.all([
            assert.instanceOf(promise, Promise, 'The returned value is a promise'),
            assert.isFulfilled(promise, 'The promise is fulfilled'),
            promise.then(() => {
               assert.isTrue(stub.calledOnce, 'The method is only called once');
               assert.isTrue(stub.calledWithExactly({
                  ancestor
               }), 'The method is called with the expected arguments');

               stub.restore();
            })
         ]);
      });

      it('should recognize the "read links in element" command (sad path)', function() {
         let ancestor = document.createElement('header');
         let stub = sinon
            .stub(webReader, 'readLinks')
            .returns(
               Promise.reject(new WebReaderError())
            );
         let promise = Router.route(webReader, {
            command: 'READ_LINKS_IN_ELEMENT',
            element: ancestor
         });

         return Promise.all([
            assert.instanceOf(promise, Promise, 'The returned value is a promise'),
            assert.isRejected(promise, WebReaderError, 'The promise is rejected'),
            promise.catch(() => {
               assert.isTrue(stub.calledOnce, 'The method is only called once');
               assert.isTrue(stub.calledWithExactly({
                  ancestor
               }), 'The method is called with the expected arguments');

               stub.restore();
            })
         ]);
      });

      it('should recognize the "go to previous page" command (happy path)', function() {
         let stub = sinon
            .stub(webReader, 'goToPreviousPage')
            .returns(Promise.resolve());
         let promise = Router.route(webReader, {
            command: 'GO_TO_PREVIOUS_PAGE'
         });

         return Promise.all([
            assert.instanceOf(promise, Promise, 'The returned value is a promise'),
            assert.isFulfilled(promise, 'The promise is fulfilled'),
            promise.then(() => {
               assert.isTrue(stub.calledOnce, 'The method is only called once');
               assert.isTrue(stub.calledWithExactly(), 'The method is called with the expected arguments');

               stub.restore();
            })
         ]);
      });

      it('should recognize the "go to previous page" command (sad path)', function() {
         let stub = sinon
            .stub(webReader, 'goToPreviousPage')
            .returns(
               Promise.reject(new WebReaderError())
            );
         let promise = Router.route(webReader, {
            command: 'GO_TO_PREVIOUS_PAGE'
         });

         return Promise.all([
            assert.instanceOf(promise, Promise, 'The returned value is a promise'),
            assert.isRejected(promise, WebReaderError, 'The promise is rejected'),
            promise.catch(() => {
               assert.isTrue(stub.calledOnce, 'The method is only called once');
               assert.isTrue(stub.calledWithExactly(), 'The method is called with the expected arguments');

               stub.restore();
            })
         ]);
      });

      it('should recognize the "go to next page" command (happy path)', function() {
         let stub = sinon
            .stub(webReader, 'goToNextPage')
            .returns(Promise.resolve());
         let promise = Router.route(webReader, {
            command: 'GO_TO_NEXT_PAGE'
         });

         return Promise.all([
            assert.instanceOf(promise, Promise, 'The returned value is a promise'),
            assert.isFulfilled(promise, 'The promise is fulfilled'),
            promise.then(() => {
               assert.isTrue(stub.calledOnce, 'The method is only called once');
               assert.isTrue(stub.calledWithExactly(), 'The method is called with the expected arguments');

               stub.restore();
            })
         ]);
      });

      it('should recognize the "go to next page" command (sad path)', function() {
         let stub = sinon
            .stub(webReader, 'goToNextPage')
            .returns(
               Promise.reject(new WebReaderError())
            );
         let promise = Router.route(webReader, {
            command: 'GO_TO_NEXT_PAGE'
         });

         return Promise.all([
            assert.instanceOf(promise, Promise, 'The returned value is a promise'),
            assert.isRejected(promise, WebReaderError, 'The promise is rejected'),
            promise.catch(() => {
               assert.isTrue(stub.calledOnce, 'The method is only called once');
               assert.isTrue(stub.calledWithExactly(), 'The method is called with the expected arguments');

               stub.restore();
            })
         ]);
      });

      it('should recognize the "read page summary" command (happy path)', function() {
         let stub = sinon
            .stub(webReader, 'readPageSummary')
            .returns(Promise.resolve());
         let promise = Router.route(webReader, {
            command: 'READ_PAGE_SUMMARY'
         });

         return Promise.all([
            assert.instanceOf(promise, Promise, 'The returned value is a promise'),
            assert.isFulfilled(promise, 'The promise is fulfilled'),
            promise.then(() => {
               assert.isTrue(stub.calledOnce, 'The method is only called once');
               assert.isTrue(stub.calledWithExactly(), 'The method is called with the expected arguments');

               stub.restore();
            })
         ]);
      });

      it('should recognize the "read page summary" command (sad path)', function() {
         let stub = sinon
            .stub(webReader, 'readPageSummary')
            .returns(
               Promise.reject(new WebReaderError())
            );
         let promise = Router.route(webReader, {
            command: 'READ_PAGE_SUMMARY'
         });

         return Promise.all([
            assert.instanceOf(promise, Promise, 'The returned value is a promise'),
            assert.isRejected(promise, WebReaderError, 'The promise is rejected'),
            promise.catch(() => {
               assert.isTrue(stub.calledOnce, 'The method is only called once');
               assert.isTrue(stub.calledWithExactly(), 'The method is called with the expected arguments');

               stub.restore();
            })
         ]);
      });

      it('should recognize the "go to homepage" command', function() {
         let stub = sinon
            .stub(webReader, 'goToHomepage')
            .returns();
         let promise = Router.route(webReader, {
            command: 'GO_TO_HOMEPAGE'
         });

         return Promise.all([
            assert.instanceOf(promise, Promise, 'The returned value is a promise'),
            assert.isFulfilled(promise, 'The promise is fulfilled'),
            promise.then(() => {
               assert.isTrue(stub.calledOnce, 'The method is only called once');
               assert.isTrue(stub.calledWithExactly(), 'The method is called with the expected arguments');

               stub.restore();
            })
         ]);
      });

      it('should recognize the "go to link" command (happy path)', function() {
         let stub = sinon
            .stub(webReader, 'goToLink')
            .returns();
         let promise = Router.route(webReader, {
            command: 'GO_TO_LINK'
         });

         return Promise.all([
            assert.instanceOf(promise, Promise, 'The returned value is a promise'),
            assert.isFulfilled(promise, 'The promise is fulfilled'),
            promise.then(() => {
               assert.isTrue(stub.calledOnce, 'The method is only called once');
               assert.isTrue(stub.calledWithExactly(), 'The method is called with the expected arguments');

               stub.restore();
            })
         ]);
      });

      it('should recognize the "go to link" command (sad path)', function() {
         let stub = sinon
            .stub(webReader, 'goToLink')
            .throws(new WebReaderError());
         let promise = Router.route(webReader, {
            command: 'GO_TO_LINK'
         });

         return Promise.all([
            assert.instanceOf(promise, Promise, 'The returned value is a promise'),
            assert.isRejected(promise, WebReaderError, 'The promise is rejected'),
            promise.catch(() => {
               assert.isTrue(stub.calledOnce, 'The method is only called once');
               assert.isTrue(stub.calledWithExactly(), 'The method is called with the expected arguments');

               stub.restore();
            })
         ]);
      });

      it('should not recognize an unknown command', function() {
         let promise = Router.route(webReader, {
            command: 'UNKNOWN_COMMAND'
         });

         return Promise.all([
            assert.instanceOf(promise, Promise, 'The returned value is a promise'),
            assert.isRejected(promise, WebReaderError, 'The promise is rejected')
         ]);
      });
   });
});