import { Router } from "angular2/ts/src/router/router";
import { RouteRegistry } from "angular2/src/router/route_registry";
import { RouteParams } from "angular2/src/router/instruction";
import { Navigation } from '../navigation/navigation';
import { PortfolioService } from "./portfolio.service";
import { Project } from "./project";

export let mockCollection: Project[] = [{
    "id": 1337,
    "title": "Test Thing 1",
    "image": "",
    "link": "",
    "text": ""
}];

export class mockService extends PortfolioService {
    getCardItems(): Promise<Project[]> {
        return Promise.resolve(mockCollection);
    }
}

class MockRouter extends Router {
    constructor () {
        super(null, null, null, null);
    }
}

export let mockRouter = new MockRouter();
export let mockRouteParams = new RouteParams({
    "foo": "bar"
});