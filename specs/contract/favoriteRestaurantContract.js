const itActsAsFavoriteRestaurantModel = (favoriteRestaurant) => {
  it('should return the restaurant that has been added', async () => {
    await favoriteRestaurant.add({ id: 1 });
    await favoriteRestaurant.add({ id: 2 });

    expect(await favoriteRestaurant.getOne(1)).toEqual({ id: 1 });
    expect(await favoriteRestaurant.getOne(2)).toEqual({ id: 2 });
    expect(await favoriteRestaurant.getOne(3)).toEqual(undefined);
  });

  it('should refuse the added restaurant has the wrong property', async () => {
    await favoriteRestaurant.add({ aProperty: 'aProperty' });

    expect(await favoriteRestaurant.getAll()).toEqual([]);
  });

  it('can return all the restaurant', async () => {
    await favoriteRestaurant.add({ id: 1 });
    await favoriteRestaurant.add({ id: 2 });

    expect(await favoriteRestaurant.getAll()).toEqual([
      { id: 1 },
      { id: 2 },
    ]);
  });

  it('should remove favorite restaurant', async () => {
    await favoriteRestaurant.add({ id: 1 });
    await favoriteRestaurant.add({ id: 2 });
    await favoriteRestaurant.add({ id: 3 });

    await favoriteRestaurant.remove(1);
    expect(await favoriteRestaurant.getAll()).toEqual([
      { id: 2 },
      { id: 3 },
    ]);
  });

  it('should handle request to remove restaurant even though the restaurant not available on the list', async () => {
    await favoriteRestaurant.add({ id: 1 });
    await favoriteRestaurant.add({ id: 2 });
    await favoriteRestaurant.add({ id: 3 });

    await favoriteRestaurant.remove(4);
    expect(await favoriteRestaurant.getAll()).toEqual([
      { id: 1 },
      { id: 2 },
      { id: 3 },
    ]);
  });
};

// eslint-disable-next-line import/prefer-default-export
export { itActsAsFavoriteRestaurantModel };
