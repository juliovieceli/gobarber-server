import ListProviderMonthAvailabilityService from './ListProviderMonthAvailabilityService';
import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';

let listProviderMonthAvailability: ListProviderMonthAvailabilityService;
let fakeAppointmentsRepository: FakeAppointmentsRepository;

describe('ListProvidersMonthAvailability', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    listProviderMonthAvailability = new ListProviderMonthAvailabilityService(
      fakeAppointmentsRepository,
    );
  });

  it('should be able to list the providers', async () => {
    /*     const user2 = await fakeUsersRepository.create({
      name: 'John tre',
      email: 'johntre@example.com',
      password: '123456',
    }); */
    await fakeAppointmentsRepository.create({
      provider_id: 'provider-id',
      user_id: 'user',
      date: new Date(2020, 5, 15, 12, 0, 0),
    });
    await fakeAppointmentsRepository.create({
      provider_id: 'provider-id',
      user_id: 'user',
      date: new Date(2020, 9, 1, 8, 0, 0),
    });
    await fakeAppointmentsRepository.create({
      provider_id: 'provider-id',
      user_id: 'user',
      date: new Date(2020, 9, 1, 9, 0, 0),
    });
    await fakeAppointmentsRepository.create({
      provider_id: 'provider-id',
      user_id: 'user',
      date: new Date(2020, 9, 1, 10, 0, 0),
    });
    await fakeAppointmentsRepository.create({
      provider_id: 'provider-id',
      user_id: 'user',
      date: new Date(2020, 9, 1, 11, 0, 0),
    });
    await fakeAppointmentsRepository.create({
      provider_id: 'provider-id',
      user_id: 'user',
      date: new Date(2020, 9, 1, 12, 0, 0),
    });
    await fakeAppointmentsRepository.create({
      provider_id: 'provider-id',
      user_id: 'user',
      date: new Date(2020, 9, 1, 13, 0, 0),
    });
    await fakeAppointmentsRepository.create({
      provider_id: 'provider-id',
      user_id: 'user',
      date: new Date(2020, 9, 1, 14, 0, 0),
    });
    await fakeAppointmentsRepository.create({
      provider_id: 'provider-id',
      user_id: 'user',
      date: new Date(2020, 9, 1, 15, 0, 0),
    });
    await fakeAppointmentsRepository.create({
      provider_id: 'provider-id',
      user_id: 'user',
      date: new Date(2020, 9, 1, 16, 0, 0),
    });
    await fakeAppointmentsRepository.create({
      provider_id: 'provider-id',
      user_id: 'user',
      date: new Date(2020, 9, 1, 17, 0, 0),
    });
    await fakeAppointmentsRepository.create({
      provider_id: 'provider-id',
      user_id: 'user',
      date: new Date(2020, 9, 2, 11, 0, 0),
    });

    const availability = await listProviderMonthAvailability.execute({
      provider_id: 'provider-id',
      year: 2020,
      month: 10,
    });

    expect(availability).toEqual(
      expect.arrayContaining([
        { day: 19, available: true },
        { day: 1, available: false },
        { day: 21, available: true },
        { day: 22, available: true },
      ]),
    );
  });
});
