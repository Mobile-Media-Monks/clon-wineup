/* eslint-disable @typescript-eslint/no-explicit-any */
import AxiosCaller from '@infrastructure/network/AxiosCaller';
import { ApiServiceConstructors } from '@/domain/types/network/api';

class DIContainer {
  private dependencies: Record<string, any> = {};

  public register(
    key: string,
    constructor: any,
    dependencies: Array<string>,
  ): void {
    this.dependencies[key] = {
      constructor,
      dependencies,
    };
  }

  public resolve<T>(key: string): T {
    const target = this.dependencies[key];
    if (!target) {
      throw new Error(`Dependency ${key} not found.`);
    }

    if (target.instance) {
      return target.instance as T;
    }
    const resolvedDependencies = target.dependencies.map((dep: string) =>
      this.resolve(dep),
    );
    target.instance = new target.constructor(...resolvedDependencies);
    return target.instance as T;
  }
}

const diContainer = new DIContainer();

export enum EXPOSED_SERVICES {
  DATABASE = 'database',
  AUTH = 'auth',
}

const API_SERVICES: ApiServiceConstructors = {
  AxiosCaller,
};

/**
 * Initialize the Dependency Injection container.
 *
 * @remarks
 * Registers the selected API caller service with the dependency injection container.
 * The API caller service requires the AUTH service as a dependency.
 */
export const initDIContainer = (): void => {
  const apiCallerName = 'AxiosCaller';
  const ApiCallerConstructor = API_SERVICES[apiCallerName];

  if (!ApiCallerConstructor) {
    throw new Error(`API Caller ${apiCallerName} is not supported.`);
  }

  diContainer.register(EXPOSED_SERVICES.DATABASE, ApiCallerConstructor, []);
};

export const resolveService = <T>(key: string): T =>
  diContainer.resolve<T>(key);
