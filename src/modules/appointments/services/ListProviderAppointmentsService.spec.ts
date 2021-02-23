import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import ListProviderAppointmentsService from './ListProviderAppointmentsService';
import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';

let ListProviderAppointments: ListProviderAppointmentsService;
let fakeAppointmentsRepository: FakeAppointmentsRepository;
let fakeCacheProvider: FakeCacheProvider;

describe('ListProviderAppointments', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    fakeCacheProvider = new FakeCacheProvider();

    ListProviderAppointments = new ListProviderAppointmentsService(
      fakeAppointmentsRepository,
      fakeCacheProvider,
    );
  });

  it('should be able to list the appointments on a specific day', async () => {
    /*     const user2 = await fakeUsersRepository.create({
      name: 'John tre',
      email: 'johntre@example.com',
      password: '123456',
    }); */

    const appointment1 = await fakeAppointmentsRepository.create({
      provider_id: 'provider-id',
      user_id: 'user',
      date: new Date(2020, 9, 1, 8, 0, 0),
    });
    const appointment2 = await fakeAppointmentsRepository.create({
      provider_id: 'provider-id',
      user_id: 'user',
      date: new Date(2020, 9, 1, 9, 0, 0),
    });

    const availability = await ListProviderAppointments.execute({
      provider_id: 'provider-id',
      day: 1,
      month: 10,
      year: 2020,
    });

    expect(availability).toEqual([appointment1, appointment2]);
  });
});
