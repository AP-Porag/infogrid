<?php

namespace App\Services;


use App\Models\Cooling;
use App\Services\BaseService;

class CoolingService extends BaseService
{

    protected $model;

    public function __construct()
    {
        $this->model = Cooling::class;
    }

    public function storeOrUpdate($data, $id = null)
    {
        try {
            // Call patent method
            return parent::storeOrUpdate($data, $id);
        } catch (\Exception $e) {
            $this->logFlashThrow($e);
        }
    }
}

