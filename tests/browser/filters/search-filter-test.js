describe('Search filter', function () {

  beforeEach(module('FullstackGeneratedApp'));

  var $filter;

  beforeEach(inject(function(_$filter_){
    $filter = _$filter_;
  }));

  it('exists', function () {
    var searchFilter = $filter('searchFor');
    expect(searchFilter).to.not.be.null;
  });

  it('filters correctly', function () {
     var searchFilter = $filter('searchFor');
     var collection = [{title: 'hi'}, {title: 'world'}];
     var collectionFiltered = [{title: 'hi'}];
     var searchString = 'hi';
     expect(searchFilter(collection, searchString)).to.deep.equal(collectionFiltered);
  })

})
